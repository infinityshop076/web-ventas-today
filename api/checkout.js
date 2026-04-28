import Stripe from 'stripe';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Initialize Stripe with the secret key from environment variables
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-10-16'
  });

  try {
    const priceId = process.env.STRIPE_PRICE_ID;
    let lineItems = [];
    
    // Check if we have a valid price ID, otherwise fallback to ad-hoc price
    if (priceId && priceId.startsWith('price_')) {
      lineItems = [{ price: priceId, quantity: 1 }];
    } else {
      lineItems = [{
        price_data: {
          currency: 'chf',
          product_data: {
            name: 'GyroBowl',
            images: ['https://web-ventas-today.vercel.app/gyro_main.png']
          },
          unit_amount: 2490, // 24.90 CHF in rappen
        },
        quantity: 1,
      }];
    }

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'twint'],
      shipping_address_collection: {
        allowed_countries: ['CH'], // Strictly Switzerland
      },
      phone_number_collection: {
        enabled: true, // Phone number mandatory
      },
      line_items: lineItems,
      mode: 'payment',
      success_url: 'https://infinityshop.ch',
      cancel_url: 'https://infinityshop.ch',
    });

    // Return the session ID and URL
    return res.json({ id: session.id, url: session.url });
  } catch (error) {
    console.error('Stripe error:', error.message);
    return res.status(500).json({ error: error.message });
  }
}

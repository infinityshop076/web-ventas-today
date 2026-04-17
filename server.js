import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Stripe strictly with process.env.STRIPE_SECRET_KEY as explicitly requested
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16' // Standard stable version
});

app.post('/create-checkout-session', async (req, res) => {
  try {
    const priceId = process.env.STRIPE_PRICE_ID;
    let lineItems = [];
    
    if (priceId && priceId.startsWith('price_')) {
      lineItems = [{ price: priceId, quantity: 1 }];
    } else {
      // Ad-hoc price fallback strictly at 124 CHF if no valid PRICE_ID
      lineItems = [{
        price_data: {
          currency: 'chf',
          product_data: {
            name: 'Infinity Moon Lamp',
            images: ['https://infinityshop.ch/hero_luni_notext_1776320110171.png']
          },
          unit_amount: 12400, // 124.00 CHF in rappen
        },
        quantity: 1,
      }];
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'twint'],
      shipping_address_collection: {
        allowed_countries: ['CH'], // Strictly Switzerland
      },
      phone_number_collection: {
        enabled: true, // Phone number mandatory
      },
      line_items: lineItems,
      mode: 'payment', // Payment mode
      success_url: 'https://infinityshop.ch',
      cancel_url: 'https://infinityshop.ch',
    });

    res.json({ id: session.id, url: session.url });
  } catch (error) {
    console.error('Stripe error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Stripe Backend running on http://localhost:${PORT}`);
});

import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(req: Request) {
  try {
    const { country } = await req.json();
    
    const isSwitzerland = country === 'CH';
    const currency = isSwitzerland ? 'chf' : 'eur';
    const amount = isSwitzerland ? 2490 : 2290; // In cents/rappen

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      shipping_address_collection: {
        allowed_countries: ['CH', 'ES', 'FR', 'DE', 'IT', 'AT'],
      },
      phone_number_collection: {
        enabled: true,
      },
      line_items: [
        {
          price_data: {
            currency: currency,
            product_data: {
              name: 'Original 360° GyroBowl',
              description: 'Anti-spill bowl for babies - 360 degree rotation',
              images: ['https://infinityshop.ch/gyro_main.png'],
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success`,
      cancel_url: `${req.headers.get('origin')}/`,
    });

    return NextResponse.json({ id: session.id, url: session.url });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Stripe error:', errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

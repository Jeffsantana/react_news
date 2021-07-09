import Stripe from 'stripe';

const key = process.env.STRIPE_API_KEY

export const stripe = new Stripe(
    key,
    {
        apiVersion: '2020-08-27',
        appInfo: {
            name: 'Ignite',
            version: '0.0.1'
        },
    }
)
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

export const createPaymentIntent = async (amount, currency) => {
    const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            amount,
            currency,
        }),
    });

    const { client_secret } = await response.json();

    return client_secret;
};

export default stripePromise;


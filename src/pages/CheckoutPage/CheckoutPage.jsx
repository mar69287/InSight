import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
    }
    return stripePromise;
}

export default function Checkout() {
    const item = {
        price: 'price_1MkBudCGbC4iQ1GMKbfK4yaf',
        quantity: 1
    };
    const checkoutOptions = {
        lineItems: [item],
        mode: 'subscription',
        successUrl: `http://localhost:3000/success`,
        cancelUrl: `http://localhost:3000/cancel`,
    }

    const redirectToCheckout = async () => {
        console.log('redirectToCheckout')
        const stripe = await getStripe()
        const { error } = await stripe.redirectToCheckout(checkoutOptions)
        console.log('Stripe checkout error', error)
    }

    return <button onClick={redirectToCheckout}>Checkout</button>;

}
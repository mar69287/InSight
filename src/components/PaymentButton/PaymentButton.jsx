import StripeCheckout from "react-stripe-checkout";
import * as usersPayment from '../../utilities/payment-api';
import { getPayments } from '../../utilities/payment-api'
import './PaymentButton.css'

export default function PaymentButton({ setPayments }) {
    const amount = 200

    async function handleToken(token) {
        try {
            const response = await usersPayment.createPayment({ token: token, amount: amount });
            const payments = await getPayments();
            setPayments(payments);
            if (response.success) {
                window.alert("Transaction Successful.");
            } else {
                throw new Error("Transaction Failed.");
            }
        } catch (error) {
            window.alert("Transaction Failed.");
        }
    }

    return (
        <div className="payment-container">
            <h2 className="payment-title">Upgrade to Premium</h2>
            <p className="payment-text">You are currently on the free trial plan and are only permitted one company. A single payment of $200 will allow you to add as many companies as you wish. </p>
            <StripeCheckout
                stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY || ""}
                token={handleToken}
                name=""
                panelLabel={`Pay`}
                currency="USD"
            ></StripeCheckout>
        </div>
    );
}



import { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import * as usersPayment from '../../utilities/payment-api';

export default function PaymentPage() {
    const amount = 200

    async function handleToken(token) {
        try {
            const response = await usersPayment.createPayment({ token: token, amount: amount });
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
        <div className="dashboard-home">

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


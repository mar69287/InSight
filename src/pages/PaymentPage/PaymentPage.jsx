import { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

function PaymentPage() {
    const [amount, setAmount] = useState(200);
    const handleToken = (token) => {
        fetch("api/payment/donate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token, amount: 200 }),
        })
            .then((res) => res.json())
            .then((_) => {
                window.alert("Transaction Successful.");
            })
            .catch((_) => window.alert("Transaction Failed."));
    };


    return (
        <div className="dashboard-home">

            <StripeCheckout
                stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY || ""}
                token={handleToken}
                name=""
                panelLabel={`Pay`}
                currency="USD"
                amount={amount * 100}
            ></StripeCheckout>
        </div>
    );
}

export default PaymentPage;


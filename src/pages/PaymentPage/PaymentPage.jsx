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

    const handleAmountChange = (e) => {
        const value = e.target.value;
        setAmount(value);
    };

    console.log(process.env.REACT_APP_STRIPE_KEY)

    return (
        <div
            className="App"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
                flexDirection: "column",
                gap: 15,
            }}
        >
            <div>
                <label htmlFor="amount">Amount</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={handleAmountChange}
                />
            </div>
            <StripeCheckout
                stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY || ""}
                token={handleToken}
                name=""
                panelLabel={`Donate`}
                currency="USD"
                amount={amount * 100}
            ></StripeCheckout>
        </div>
    );
}

export default PaymentPage;


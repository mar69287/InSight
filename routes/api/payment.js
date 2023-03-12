const router = require('express').Router();
const Stripe = require('stripe');
require('dotenv').config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", null);

router.post('/', async (req, res) => {
    // console.log('in the route payment')
    // console.log(req.body)
    const { token = {}, amount = 200 } = req.body;
    // console.log(token)

    if (!Object.keys(token).length || !amount) {
        res.status(400).json({ success: false });
    }

    const { id: customerId } = await stripe.customers.create({
        email: token.email,
        source: token.id,
    }).catch(e => {
        console.log(e);
        return null;
    })

    if (!customerId) {
        res.status(500).json({ success: false });
        return;
    }

    const invoiceId = `${token.email}-${Math.random().toString()}-${Date.now().toString()}`;
    console.log('invoiceId: ', invoiceId)
    const charge = await stripe.charges.create({
        amount: amount * 100,
        currency: "USD",
        customer: customerId,
        receipt_email: token.email,
        description: "Donation",
    }, { idempotencyKey: invoiceId }).catch(e => {
        console.log(e);
        return null;
    });

    if (!charge) {
        res.status(500).json({ success: false });
        return;
    };

    res.status(201).json({ success: true });
});

module.exports = router; 
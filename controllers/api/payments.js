const Payment = require('../../models/payment')
const Stripe = require('stripe');
require('dotenv').config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", null);

module.exports = {
    create,
    index

}

async function create(req, res) {
    const { token = {}, amount = 200 } = req.body;


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

    const charge = await stripe.charges.create({
        amount: amount * 100,
        currency: "USD",
        customer: customerId,
        receipt_email: token.email,
        description: "Insight App Payment",
    }, { idempotencyKey: invoiceId }).catch(e => {
        console.log(e);
        return null;
    });

    if (!charge) {
        res.status(500).json({ success: false });
        return;
    };

    const payment = new Payment({
        invoiceId: invoiceId,
        user: req.user._id // assuming that you have the authenticated user object in the request object
    });

    await payment.save();

    res.status(201).json({ success: true });
}

async function index(req, res) {
    const userId = req.user._id;
    const payments = await Payment.find({ user: userId });

    res.json(payments);
}

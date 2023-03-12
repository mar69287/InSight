const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const paymentSchema = new Schema({
    invoiceId: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Payment', paymentSchema);
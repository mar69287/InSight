const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    position: String
}, {
    timestamps: true,
});

const companySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    employees: [employeeSchema],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    revenue: {
        type: Number
    },
    sales: {
        type: Number
    },
    orders: {
        type: Number
    },
    inventory: {
        type: Number
    },
    active: {
        type: Boolean,
        required: true
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Company', companySchema);
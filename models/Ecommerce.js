const mongoose = require('mongoose');
//product schema for ecommerce product
const ecommerceApi = new mongoose.Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true,
    },
}, { timestamps: true }
);

const Ecommerce = mongoose.model('Ecommerce', ecommerceApi);
module.exports = Ecommerce;
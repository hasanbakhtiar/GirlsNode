const Joi = require('joi');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String
}, { timestamps: true });


const productValidate = (product) => {
    const schema = new Joi.object({
        title: Joi.string()
    })
    return schema.validate(product);
}

const Product = mongoose.model('Product', productSchema);
module.exports = { Product, productValidate }
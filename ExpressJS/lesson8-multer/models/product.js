const Joi = require('joi');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    productID: String,
    singleImage: String,
    images:Array,
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    price: Number,
    discountPrice: Number,
    description: String,
    stock: {
        type: Number,
        default: 1
    }
}, { timestamps: true });


const productValidate = (product) => {
    const schema = new Joi.object({
        title: Joi.string(),
        productID: Joi.string(),
        singleImage: Joi.string(),
        images: Joi.array(),
        category: Joi.string(),
        price: Joi.number().required(),
        discountPrice: Joi.number().required(),
        description: Joi.string().required(),
        stock: Joi.number(),
    })
    return schema.validate(product);
}

const Product = mongoose.model('Product', productSchema);
module.exports = { Product, productValidate }
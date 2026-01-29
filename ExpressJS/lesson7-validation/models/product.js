const Joi = require('joi');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    productID: String,
    category: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
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
        title: Joi.string().required().min(2).max(20).message({
            'string.min': '2 simvoldan artiq olmalidir',
            'string.max': '20 simvoldan az olmalidir'
        }),
        productID: Joi.string(),
        category: Joi.array().items(Joi.string()).required(),
        price: Joi.number().required(),
        discountPrice: Joi.number().required(),
        description: Joi.string().required(),
        stock: Joi.number(),
    })
    return schema.validate(product);
}

const Product = mongoose.model('Product', productSchema);
module.exports = { Product, productValidate }
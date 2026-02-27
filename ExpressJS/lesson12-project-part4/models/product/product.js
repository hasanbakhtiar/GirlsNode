const Joi = require('joi');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: String,
    slug: String,

    thumbnail: String,
    images: Array,

    title: String,
    price: Number,
    discountPrice: Number,
    description: String,
    stockCount: Number,

    color: { type: mongoose.Schema.Types.ObjectId, ref: "Color" },
    material: { type: mongoose.Schema.Types.ObjectId, ref: "Material" },

    gender: {
        type: String,
        values: ['male', 'female', 'uni'],
        default: 'uni'
    },
    newProduct: {
        type: Boolean,
        default: false
    },
    bestseller: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });


const productValidate = (product) => {
    const schema = new Joi.object({
        productId: Joi.string(),
        slug: Joi.string(),

        thumbnail: Joi.string(),
        images: Joi.array(),

        title: Joi.string(),
        price: Joi.number(),
        discountPrice: Joi.number(),
        description: Joi.string(),
        stockCount: Joi.number(),

        color: Joi.string(),
        material: Joi.string(),

        gender: Joi.string(),
        newProduct: Joi.boolean(),
        bestseller: Joi.boolean()

    })
    return schema.validate(product);
}

const Product = mongoose.model('Product', productSchema);
module.exports = { Product, productValidate }
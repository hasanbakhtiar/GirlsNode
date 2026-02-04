const Joi = require('joi');
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: String,
    row: Number,
    showHomePage: {
        type: Boolean,
        default: false,

    }

}, { timestamps: true });

const categoryValidate = (category) => {
    const schema = new Joi.object({
        title: Joi.string().required(),
        row: Joi.number().required(),
        showHomePage: Joi.boolean()
    })
    return schema.validate(category);
}


const Category = mongoose.model('Category', categorySchema);
module.exports = { Category, categoryValidate }
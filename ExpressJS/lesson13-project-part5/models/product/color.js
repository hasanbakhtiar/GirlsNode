const Joi = require('joi');
const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
    title: String,
    colorCode: String,
}, { timestamps: true });


const colorValidate = (color) => {
    const schema = new Joi.object({
        title: Joi.string(),
        colorCode: Joi.string()
    })
    return schema.validate(color);
}

const Color = mongoose.model('Color', colorSchema);
module.exports = { Color, colorValidate }
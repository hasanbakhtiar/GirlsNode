const Joi = require('joi');
const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
    title: String
}, { timestamps: true });


const materialValidate = (material) => {
    const schema = new Joi.object({
        title: Joi.string()
    })
    return schema.validate(material);
}

const Material = mongoose.model('Material', materialSchema);
module.exports = { Material, materialValidate }
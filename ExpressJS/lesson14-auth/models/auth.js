const Joi = require("joi");

const loginValidate = (data) => {
    const schema = new Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    })
    return schema.validate(data);
}

const registerValidate = (user) => {
    const schema = new Joi.object({
        fullname: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
    })
    return schema.validate(user);
}

module.exports = { loginValidate, registerValidate }
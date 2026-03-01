const Joi = require('joi');


const registerValidate = (register) => {
    const schema = new Joi.object({
        fullname: Joi.string(),
        email: Joi.string(),
        password: Joi.string(),
        role: Joi.string().default('user'),
    })
    return schema.validate(register);
}


const loginValidate = (login) => {
    const schema = new Joi.object({
        email: Joi.string(),
        password: Joi.string(),
    })
    return schema.validate(login);
}

module.exports = { registerValidate, loginValidate }
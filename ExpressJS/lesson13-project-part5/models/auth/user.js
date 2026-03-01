const Joi = require('joi');
const jwt  = require('jsonwebtoken');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    role: {
        type: String,
        value: ["admin", "user"],
        default: "user"
    }
}, { timestamps: true });


const userValidate = (user) => {
    const schema = new Joi.object({
        fullname: Joi.string(),
        email: Joi.string(),
        password: Joi.string(),
        role: Joi.string(),
    })
    return schema.validate(user);
}


userSchema.methods.createAuthToken = function () {
    const decodedToken = jwt.sign({
        _id: this._id,
        fullname: this.fullname,
        email: this.email,
        phone: this.phone,
        role: this.role
    }, "jwtPrivateKey")
    return decodedToken;
}



const User = mongoose.model('User', userSchema);
module.exports = { User, userValidate }
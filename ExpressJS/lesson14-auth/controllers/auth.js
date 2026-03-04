const jwt = require('jsonwebtoken');
const { User } = require("../models/user");
const { registerValidate, loginValidate } = require('../models/auth');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
    const { error } = loginValidate(req.body);
    if (error) {
        res.status(400).json({
            message: error.message
        });
    } else {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            res.status(400).json({
                message: "This user is not existed!"
            });
        } else {
            const isSuccess = await bcrypt.compare(req.body.password, user.password);
            if (isSuccess) {

                const token = jwt.sign({
                    id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                    role: user.role
                }, "ultragizlikoddur!");

                res.status(200).header('x-auth-token', token).json({
                    message: "Login is successfully",
                    data: {
                        id: user._id,
                        fullname: user.fullname,
                        email: user.email,
                    }
                })
            } else {
                res.status(400).json({
                    message: "Email of password is wrong!"
                });
            }
        }


    }
}


exports.register = async (req, res) => {

    const { error } = registerValidate(req.body);
    if (error) {
        return res.status(400).json({
            message: 'validate error ' + error,
        })
    }
    const checkUser = await User.findOne({ email: req.body.email });

    if (checkUser) {
        res.status(403).send("Already existed user")
    } else {
        const user = new User(req.body);
        user.password = await bcrypt.hash(req.body.password, 10);
        const result = await user.save();
        res.status(201).send(result);
    }


}
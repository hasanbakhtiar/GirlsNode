const { registerValidate, loginValidate } = require("../../models/auth/auth");
const { User, userValidate } = require("../../models/auth/user");
const bcrypt = require('bcrypt');


exports.register = async (req, res) => {
    const { error } = registerValidate(req.body);
    if (error) {
        res.status(400).json({
            message: error.message
        });
    } else {
        const checkUser = await User.findOne({ email: req.body.email });
        if (checkUser) {
            res.status(403).send("Already existed user")
        } else {
            if (req.body.role === "admin") {
                res.status(403).json({ message: "No permission!" })
            } else {
                const user = new User(req.body);
                user.password = await bcrypt.hash(req.body.password, 10);
                const result = await user.save();
                res.status(200).json({ message: "Register success" })
            }
        }
    }
}

exports.login = async (req, res) => {
    const { error } = loginValidate(req.body);
    if (error) {
        res.status(400).json({
            message: error.message
        });
    } else {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            const isSuccess = await bcrypt.compare(req.body.password, user.password);
            if (isSuccess) {
                const token = user.createAuthToken();
                res.status(200).header('x-auth-token', token).json({
                    message: "Login is successfully",
                    data: {
                        fullname: user.fullname,
                        email: user.email,
                        phone: user.phone
                    }
                })
            } else {
                res.status(400).json({
                    message: "Email of password is wrong!"
                });
            }
        } else {
            res.status(400).json({
                message: "This user is not existed!"
            });
        }

    }
}


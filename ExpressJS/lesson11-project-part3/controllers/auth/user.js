const { User, userValidate } = require("../../models/auth/user");
const bcrypt = require('bcrypt');

exports.userSingleData = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404).json({
            message: "Not found"
        })
    }
    res.status(200).json(user);

}


exports.userAllList = async (req, res) => {
    const user = await User.find();
    res.status(200).json({
        dataLength: user.length,
        data: user
    });
}


exports.userCreate = async (req, res) => {
    const { error } = userValidate(req.body);
    if (error) {
        return res.send(400).json({
            message: 'validate error ' + error,
        })
    } else {
        const checkUser = await User.findOne({ email: req.body.email });
        if (checkUser) {
            res.status(400).json({ message: "Already existed user." })
        } else {
            let user = new User(req.body);
            user.password = await bcrypt.hash(req.body.password, 10)
            const result = await user.save();
            res.status(201).send(result);
        }
    }


}

exports.userUpdate = async (req, res) => {
    const { error } = userValidate(req.body);
    if (error) {
        return res.send(400).json({
            message: 'validate error ' + error
        })
    }
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(user);
}

exports.userDelete = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
        statusMessage: "user were deleted!",
        data: user
    })

}

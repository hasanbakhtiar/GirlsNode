const { Color, colorValidate } = require("../../models/product/color");

exports.colorSingleData = async (req, res) => {
    const color = await Color.findById(req.params.id);
    if (!color) {
        res.status(404).json({
            message: "Not found"
        })
    }
    res.status(200).json(color);
}


exports.colorAllList = async (req, res) => {
    const color = await Color.find();
    res.status(200).json({
        dataLength: color.length,
        data: color
    });
}


exports.colorCreate = async (req, res) => {
    const { error } = colorValidate(req.body);
    if (error) {
        return res.send(400).json({
            message: 'validate error ' + error,
        })
    }
    const color = new Color(req.body);
    const result = await color.save();
    res.status(201).send(result);
}

exports.colorUpdate = async (req, res) => {
    const { error } = colorValidate(req.body);
    if (error) {
        return res.send(400).json({
            message: 'validate error ' + error
        })
    }
    const color = await Color.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(color);
}

exports.colorDelete = async (req, res) => {
    const color = await Color.findByIdAndDelete(req.params.id);
    res.status(200).json({
        statusMessage: "color were deleted!",
        data: color
    })

}

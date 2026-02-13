const { Material, materialValidate } = require("../../models/product/material");

exports.materialSingleData = async (req, res) => {
    const material = await Material.findById(req.params.id);
    if (!material) {
        res.status(404).json({
            message: "Not found"
        })
    }
    res.status(200).json(material);

}


exports.materialAllList = async (req, res) => {
    const material = await Material.find();
    res.status(200).json({
        dataLength: material.length,
        data: material
    });
}


exports.materialCreate = async (req, res) => {
    const { error } = materialValidate(req.body);
    if (error) {
        return res.send(400).json({
            message: 'validate error ' + error,
        })
    }
    const material = new Material(req.body);
    const result = await material.save();
    res.status(201).send(result);
}

exports.materialUpdate = async (req, res) => {
    const { error } = materialValidate(req.body);
    if (error) {
        return res.send(400).json({
            message: 'validate error ' + error
        })
    }
    const material = await Material.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(material);
}

exports.materialDelete = async (req, res) => {
    const material = await Material.findByIdAndDelete(req.params.id);
    res.status(200).json({
        statusMessage: "material were deleted!",
        data: material
    })

}

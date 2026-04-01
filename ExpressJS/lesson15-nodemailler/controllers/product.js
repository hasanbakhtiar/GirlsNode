const { Product, productValidate } = require("../models/product");

exports.productSingleData = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404).json({
            message: "Not found"
        })
    }
    res.status(200).json(product);
}


exports.productAllList = async (req, res) => {
    const product = await Product.find();
    res.status(200).json({
        dataLength: product.length,
        data: product
    });
}


exports.productCreate = async (req, res) => {
    const { error } = productValidate(req.body);
    if (error) {
        return res.send(400).json({
            message: 'validate error ' + error,
        })
    }
    const product = new Product(req.body);
    const result = await product.save();
    res.status(201).send(result);
}

exports.productUpdate = async (req, res) => {
    const { error } = productValidate(req.body);
    if (error) {
        return res.send(400).json({
            message: 'validate error ' + error
        })
    }
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(product);
}

exports.productDelete = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
        statusMessage: "product were deleted!",
        data: product
    })

}
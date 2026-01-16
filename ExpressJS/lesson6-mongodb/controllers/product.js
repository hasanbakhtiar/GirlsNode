const { default: slugify } = require("slugify");
const { Product } = require("../models/product")

const productSingleData = async (req, res) => {
    // const product = await Product.findById(req.params.id);
    const product = await Product.find({ productID: req.params.id });
    res.status(200).json(product);
}


const productAllList = async (req, res) => {
    const product = await Product.find();
    res.status(200).json({
        dataLength: product.length,
        data: product
    });
}


const productCreate = async (req, res) => {
    const product = new Product(req.body);
    product.productID = slugify(req.body.title) + "-" + crypto.randomUUID();
    const result = await product.save();
    res.status(201).send(result);
}

const productUpdate = async (req, res) => {

}

const productDelete = async (req, res) => {


}

module.exports = { productAllList, productSingleData, productCreate, productUpdate, productDelete };
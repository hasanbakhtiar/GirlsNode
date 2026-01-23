const { default: slugify } = require("slugify");
const { Product } = require("../models/product")

const productSingleData = async (req, res) => {
    const product = await Product.find({ productID: req.params.id });

    res.status(200).json(product);
}


const productAllList = async (req, res) => {
    if (req.query.category) {
        const product = await Product.find({ category: req.query.category });
        console.log(req.method);
        product.length !== 0 ?
            res.status(200).json({
                dataLength: product.length,
                data: product
            }) : res.status(404).json({
                statusMessage: "Product not found",
            })

    } else {
        const product = await Product.find();
        product.length !== 0 ?
            res.status(200).json({
                dataLength: product.length,
                data: product
            }) : res.status(404).json({
                statusMessage: "Product not found",
            })
    }
}


const productCreate = async (req, res) => {
    const product = new Product(req.body);
    product.productID = slugify(req.body.title) + "-" + crypto.randomUUID();
    const result = await product.save();
    res.status(201).send(result);
}

const productUpdate = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(product);


}

const productDelete = async (req, res) => {
    // const product = await Product.deleteOne({ category: req.params.id });
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
        statusMessage: "product were deleted!",
        data: product
    })
}

const productDeleteAll = async (req, res) => {
    const productAll = await Product.deleteMany({ category: req.params.id });

    res.status(200).json({
        statusMessage: "All products were deleted!",
        data: productAll
    })

}

module.exports = { productAllList, productSingleData, productCreate, productUpdate, productDelete, productDeleteAll };
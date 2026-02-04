const { default: slugify } = require("slugify");
const { Product, productValidate } = require("../models/product");
const { deleteManyOldImages, deleteSingleOldImage } = require("../utils/deleteOldImage");

const productSingleData = async (req, res) => {
    const product = await Product.find({ productID: req.params.id });

    res.status(200).json(product);
}

const productAllList = async (req, res) => {
    if (req.query.category) {
        const product = await Product.find({ category: req.query.category }).populate('category');
        console.log(req.method);
        product.length !== 0 ?
            res.status(200).json({
                dataLength: product.length,
                data: product
            }) : res.status(404).json({
                statusMessage: "Product not found",
            })

    } else {
        const product = await Product.find().populate('category');
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
    const { error } = productValidate(req.body);
    if (error) {
        return res.status(400).json({
            message: error.message
        })
    }
    let product = new Product(req.body);
    let filesObj = req.files;
    let fileObjLength = Object.keys(filesObj).length;
    if (fileObjLength !== 0) {
        const uploadFile = [];
        req.files.images.map(async item => {
            uploadFile.push(item.path);
        })
        product.images = uploadFile;
        product.singleImage = req.files.singleImage[0].path;
        product.productID = slugify(req.body.title) + "-" + crypto.randomUUID();

        const result = await product.save();
        res.status(201).send(result);
    } else {
        product.productID = slugify(req.body.title) + "-" + crypto.randomUUID();

        const result = await product.save();
        res.status(201).send(result);
    }




}

const productUpdate = async (req, res) => {
    const { error } = productValidate(req.body);
    if (error) {
        return res.status(400).json({
            message: error.message
        })

    } else {
        let product;
        product = await Product.findById(req.params.id);
        if (!product) {
            res.status(404).json({
                message: "This product not found!"
            })
        } else {

            let filesObj = req.files;
            let fileObjLength = Object.keys(filesObj).length;
            if (fileObjLength !== 0) {

                product = await Product.findByIdAndUpdate(req.params.id, {
                    ...req.body
                });
                const oldImages = product.images;
                deleteManyOldImages(oldImages);
                const oldSingleImage = product.singleImage;
                deleteSingleOldImage(oldSingleImage);

                const uploadFile = [];
                req.files.images.map(async (item) => {
                    uploadFile.push(item.path);
                })
                product.images = uploadFile;
                product.singleImage = req.files.singleImage[0].path;
                await product.save();
                res.status(200).json({
                    message: "Product was updated!",
                    data: product
                })
            } else {
                product = await Product.findByIdAndUpdate(req.params.id, {
                    ...req.body
                });
                res.status(200).json({
                    message: "Product was updated!",
                    data: product
                })
            }
        }

        res.status(200).json(product);

    }


}

const productDelete = async (req, res) => {
    let product;
    product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404).json({
            message: "This product not found!"
        })
    } else {
        deleteManyOldImages(product.images);
        deleteSingleOldImage(product.singleImage);
        product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Product were deleted!",
            data: product
        });
    }
}

const productDeleteAll = async (req, res) => {
    const productAll = await Product.deleteMany({ category: req.params.id });

    res.status(200).json({
        statusMessage: "All products were deleted!",
        data: productAll
    })

}

module.exports = { productAllList, productSingleData, productCreate, productUpdate, productDelete, productDeleteAll };
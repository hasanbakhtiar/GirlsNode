const { default: slugify } = require("slugify");
const { Product, productValidate } = require("../../models/product/product");
const { deleteManyOldImages, deleteSingleOldImage } = require("../../utils/deleteOldImage");
const { idForSlug, generateSecureUniqueId } = require("../../utils/idGenerator");

const productSingleData = async (req, res) => {
    const product = await Product.find({ productId: req.params.id });
    res.status(200).json(product);
}

const productAllList = async (req, res) => {
    let product;

    if (req.query.color || req.query.material) {
        product = await Product.find({ color: req.query.color, material: req.query.material }).populate('color material');
        product.length !== 0 ?
            res.status(200).json({
                dataLength: product.length,
                data: product
            }) : res.status(404).json({
                statusMessage: "Product not found",
            })

    } else {
        if (req.query.page || req.query.limit) {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 5;
            const skip = (page - 1) * limit;
            const total = await Product.countDocuments();
            product = await Product.find().skip(skip).limit(limit).exec();
            product.length !== 0 ?
                res.status(200).json({
                    page: page,
                    limit: limit,
                    totalPages: Math.ceil(total / limit),
                    dataLength: product.length,
                    data: product
                }) : res.status(404).json({
                    statusMessage: "Product not found",
                })
        }
        product = await Product.find().populate('color material');
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
        product.thumbnail = req.files.thumbnail[0].path;
        product.productId = slugify(req.body.title, { lower: true }) + "-" + generateSecureUniqueId();
        product.slug = slugify(req.body.slug, { lower: true }) + "-" + idForSlug();

        const result = await product.save();
        res.status(201).send(result);
    } else {
        product.productId = slugify(req.body.title, { lower: true }) + "-" + generateSecureUniqueId();
        product.slug = slugify(req.body.slug, { lower: true }) + "-" + idForSlug();

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
                const oldSingleImage = product.thumbnail;
                deleteSingleOldImage(oldSingleImage);

                const uploadFile = [];
                req.files.images.map(async (item) => {
                    uploadFile.push(item.path);
                })
                product.images = uploadFile;
                product.thumbnail = req.files.thumbnail[0].path;
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
        deleteSingleOldImage(product.thumbnail);
        product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Product were deleted!",
            data: product
        });
    }
}


module.exports = { productAllList, productSingleData, productCreate, productUpdate, productDelete };
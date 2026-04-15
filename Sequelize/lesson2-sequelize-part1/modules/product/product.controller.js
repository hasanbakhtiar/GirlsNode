const Products = require("./product.model");

exports.listProduct = async (req, res) => {
    try {
        const product = await Products.findByPk(req.params.id);
        res.status(200).json({
            data: product
        })
    } catch (error) {
        console.log(error);

    }
}

exports.createProduct = async (req, res) => {
    try {
        
        await Products.create(req.body);
        res.status(200).send("Data was created");
    } catch (error) {
        console.log(error);
        res.status(400).send(error);

    }
}
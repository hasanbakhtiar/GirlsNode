const Categories = require("./category.model");

exports.listCategory = async (req, res) => {
    try {
        const product = await Categories.findByPk(req.params.id);
        res.status(200).json({
            data: product
        })
    } catch (error) {
        console.log(error);

    }
}

exports.createCategory = async (req, res) => {
    try {
        
        await Categories.create(req.body);
        res.status(200).send("Data was created");
    } catch (error) {
        console.log(error);
        res.status(400).send(error);

    }
}
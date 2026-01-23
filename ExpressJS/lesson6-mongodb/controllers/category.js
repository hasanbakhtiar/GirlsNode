const { default: slugify } = require("slugify");
const { Category } = require("../models/category")

const categorySingleData = async (req, res) => {
    const category = await Category.findById(req.params.id);
    res.status(200).json(category);
}


const categoryAllList = async (req, res) => {
    const category = await Category.find();
    res.status(200).json({
        dataLength: category.length,
        data: category
    });
}


const categoryCreate = async (req, res) => {
    const category = new Category(req.body);
    category.categoryID = slugify(req.body.title) + "-" + crypto.randomUUID();
    const result = await Category.save();
    res.status(201).send(result);
}

const categoryUpdate = async (req, res) => {

}

const categoryDelete = async (req, res) => {


}

module.exports = { categoryAllList, categorySingleData, categoryCreate, categoryUpdate, categoryDelete };
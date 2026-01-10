const productList = require('../data/products.json');


const productAllList = (req, res) => {
    res.status(200).json(productList);
}

const productSingleData = (req, res) => {
    const productDetailData = productList.find(p => p.id == req.params.id);
    res.status(200).json(productDetailData);
}

module.exports = { productAllList, productSingleData};
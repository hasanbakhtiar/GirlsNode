const path = require('path');

 const productList = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/productDetails.html'))

}

 const productSingle = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/product.html'))
}

module.exports = {productList,productSingle}
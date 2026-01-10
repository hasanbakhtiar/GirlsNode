const express = require('express');
const { productList, productSingle } = require('../controllers/product');
const route = express.Router();



route.get('/:id', productSingle);

route.get('/', productList);


module.exports = route;
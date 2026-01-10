const express = require('express');
const { productSingleData, productAllList } = require('../controllers/product');
const route = express.Router();

route.get('/:id', productSingleData);

route.get('/', productAllList);






module.exports = route;
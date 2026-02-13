const express = require('express');
const { materialSingleData, materialAllList } = require('../../controllers/product/material');
const { colorSingleData, colorAllList } = require('../../controllers/product/color');
const { productSingleData, productAllList } = require('../../controllers/product/product');
const route = express.Router();

route.get('/product/:id', productSingleData);
route.get('/product/', productAllList);

route.get('/material/:id', materialSingleData);
route.get('/material/', materialAllList);

route.get('/color/:id', colorSingleData);
route.get('/color/', colorAllList);


module.exports = route;
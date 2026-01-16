const express = require('express');
const { productSingleData,
    productAllList,
    productCreate,
    productUpdate,
    productDelete } = require('../controllers/product');
    
const route = express.Router();

route.get('/:id', productSingleData);
route.get('/', productAllList);

route.post('/', productCreate);
route.put('/:id', productUpdate);
route.delete('/:id', productDelete)

module.exports = route;
const express = require('express');
const { productSingleData,
    productAllList,
    productCreate,
    productUpdate,
    productDelete,
    productDeleteAll } = require('../controllers/product');

const upload = require('../middleware/uploadFile');

const route = express.Router();

route.get('/:id', productSingleData);
route.get('/', productAllList);

route.post('/', upload.fields([
    { name: "singleImage", maxCount: 1 },
    { name: "images", maxCount: 5 }
]), productCreate);
route.put('/:id', productUpdate);

route.delete('/all/:id', productDeleteAll)
route.delete('/:id', productDelete)

module.exports = route;
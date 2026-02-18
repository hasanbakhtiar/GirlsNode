const express = require('express');
const { productCreate, productUpdate, productDelete } = require('../../controllers/product/product');
const route = express.Router();
const upload = require('../../middlewares/upload');


route.post('/', upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: "images", maxCount: 5 }]), productCreate);
route.put('/:id', upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: "images", maxCount: 5 }]), productUpdate);
route.delete('/:id', productDelete)

module.exports = route;
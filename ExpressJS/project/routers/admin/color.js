const express = require('express');
const { colorCreate, colorUpdate, colorDelete } = require('../../controllers/product/color');
const route = express.Router();

route.post('/', colorCreate);
route.put('/:id', colorUpdate);
route.delete('/:id', colorDelete)

module.exports = route;
const express = require('express');
const { materialCreate, materialUpdate, materialDelete } = require('../../controllers/product/material');
const route = express.Router();

route.post('/', materialCreate);
route.put('/:id', materialUpdate);
route.delete('/:id', materialDelete)

module.exports = route;
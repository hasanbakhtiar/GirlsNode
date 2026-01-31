const express = require('express');
const { categorySingleData,
    categoryAllList,
    categoryCreate,
    categoryUpdate,
    categoryDelete } = require('../controllers/category');
    
const route = express.Router();

route.get('/:id', categorySingleData);
route.get('/', categoryAllList);

route.post('/', categoryCreate);
route.put('/:id', categoryUpdate);
route.delete('/:id', categoryDelete)

module.exports = route;
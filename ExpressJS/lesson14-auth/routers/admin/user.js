const express = require('express');
const { userCreate, userUpdate, userDelete, userAllList } = require('../../controllers/user');
const route = express.Router();


route.get('/', userAllList);
route.post('/', userCreate);
route.put('/:id', userUpdate);
route.delete('/:id', userDelete)

module.exports = route;
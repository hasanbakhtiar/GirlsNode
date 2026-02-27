const express = require('express');
const { userCreate, userUpdate, userDelete,  userSingleData, userAllList } = require('../../controllers/auth/user');
const route = express.Router();

route.get('/:id', userSingleData);
route.get('/', userAllList);

route.post('/', userCreate);
route.put('/:id', userUpdate);
route.delete('/:id', userDelete)

module.exports = route;
const express = require('express');
const { productAllList } = require('../../controllers/product');
const route = express.Router();

route.get('/', (req, res) => { res.send("App Start") })
route.get('/product', productAllList);

module.exports = route;
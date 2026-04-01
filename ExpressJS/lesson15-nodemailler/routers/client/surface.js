const express = require('express');
const { productAllList } = require('../../controllers/product');
const { submitForm } = require('../../controllers/submitForm');
const route = express.Router();

route.post('/submitForm',submitForm);


route.get('/', (req, res) => { res.send("App Start") })
route.get('/product', productAllList);



module.exports = route;
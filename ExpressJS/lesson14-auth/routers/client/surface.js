const express = require('express');
const { productAllList } = require('../../controllers/product');
const { login, register } = require('../../controllers/auth');
const { userSingleData } = require('../../controllers/user');
const route = express.Router();
const jwt = require('jsonwebtoken');

route.get('/', (req, res) => { res.send("App Start") })
route.get('/product', productAllList);

route.post('/login', login);
route.post('/register', register);

route.get('/account/:id', (req, res, next) => {
    const verify = jwt.verify(req.header("x-auth-token"), "ultragizlikoddur!");
    if (verify) {
        next();
    } else {
        res.send("olmaz!")
    }
}, userSingleData);

module.exports = route;
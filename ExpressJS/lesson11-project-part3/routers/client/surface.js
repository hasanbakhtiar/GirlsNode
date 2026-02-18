const express = require('express');
const { materialSingleData, materialAllList } = require('../../controllers/product/material');
const { colorSingleData, colorAllList } = require('../../controllers/product/color');
const { productSingleData, productAllList } = require('../../controllers/product/product');
const route = express.Router();


route.post("/login", (req, res) => {
    const mylogin = { email: "hasan@webluna.org", password: "hasan123" };
    if (mylogin.email === req.body.email && mylogin.password === req.body.password) {
        res.header("mykey", 1).status(200).json({
            message: "login is successfull!"
        })
    } else {
        res.status(403).json({
            message: "email or password is wrong!"
        })
    }
})


route.get('/product/:id', productSingleData);
route.get('/product/', productAllList);

route.get('/material/:id', materialSingleData);
route.get('/material/', materialAllList);

route.get('/color/:id', colorSingleData);
route.get('/color/', colorAllList);




module.exports = route;
const express = require('express');
const { listProduct, createProduct } = require('./product.controller');
const router = express.Router();


router.get("/:id", listProduct);
router.post("/", createProduct);


module.exports = router;
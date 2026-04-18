const express = require('express');
const { listCategory, createCategory } = require('./category.controller');
const router = express.Router();


router.get("/:id", listCategory);
router.post("/", createCategory);


module.exports = router;
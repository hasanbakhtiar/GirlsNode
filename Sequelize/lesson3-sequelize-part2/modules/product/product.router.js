const express = require("express");
const {
  listProduct,
  createProduct,
  deleteProduct,
  editProduct,
} = require("./product.controller");
const router = express.Router();

router.get("/:id", listProduct);
router.post("/", createProduct);
router.put("/:id", editProduct);
router.delete("/:id", deleteProduct);

module.exports = router;

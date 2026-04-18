import express from "express";
import {
  listProduct,
  createProduct,
  deleteProduct,
  editProduct,
} from "./product.controller";

const router = express.Router();

router.get("/:id", listProduct);
router.post("/", createProduct);
router.put("/:id", editProduct);
router.delete("/:id", deleteProduct);

export default router;
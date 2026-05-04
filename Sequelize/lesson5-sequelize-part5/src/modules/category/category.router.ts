import express from "express";
import { createCategory, editCategory, deleteCategory } from "./category.controller";

const router = express.Router();

router.post("/", createCategory);
router.put("/:id", editCategory);
router.delete("/:id", deleteCategory);

export default router;
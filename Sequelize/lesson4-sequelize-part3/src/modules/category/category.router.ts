import express from "express";
import { listCategory, createCategory } from "./category.controller";

const router = express.Router();

router.get("/:id", listCategory);
router.post("/", createCategory);

export default router;
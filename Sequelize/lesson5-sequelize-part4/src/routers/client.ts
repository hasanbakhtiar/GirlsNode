import express from "express";
import { allCategories, singleCategory } from "../modules/category/category.controller";
import { allProducts, singleProduct } from "../modules/product/product.controller";
import { login, register } from "../modules/auth/auth.controller";
const router = express.Router();

router.get("/product/:id", singleProduct);
router.get("/product", allProducts);
router.get("/category/:id", singleCategory);
router.get("/category", allCategories);

router.post("/register", register);
router.post("/login", login);



export default router;
// src/models/index.ts

import { Products } from "../modules/product/product.model";
import Categories from "../modules/category/category.model";
import { Users } from "../modules/user/user.model";

// --- Associations ---
Products.belongsTo(Categories, { foreignKey: "categoryId", as: "category" });
Categories.hasMany(Products, { foreignKey: "categoryId", as: "products" });

export { Products, Categories, Users };
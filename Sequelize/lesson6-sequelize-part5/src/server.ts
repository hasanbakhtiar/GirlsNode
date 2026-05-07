import dotenv from "dotenv";
dotenv.config();

import express from "express";
import sequelize from "./config/connectdb";
import { Products } from "./modules/product/product.model";
import Categories from "./modules/category/category.model";

const app = express();
app.use(express.json());

import clientRoute from './routers/client';
app.use("/api/v1", clientRoute);

import basketRoute from './modules/auth/basket/basket.router';
app.use("/api/v1/basket", basketRoute);

import productRoute from "./modules/product/product.router";
import categoryRoute from "./modules/category/category.router";
import userRoute from "./modules/auth/user/user.router";
const adminBaseUrl = "/api/v1/ad";
app.use(`${adminBaseUrl}/product`, productRoute);
app.use(`${adminBaseUrl}/category`, categoryRoute);
app.use(`${adminBaseUrl}/user`, userRoute);

(async () => {
  await sequelize.sync({ alter: true });
})();

app.listen(3000, () => {
  console.log("Express app running on port 3000");
});
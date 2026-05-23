import dotenv from "dotenv";
dotenv.config();

import express from "express";
import sequelize from "./config/connectdb";
// import './config/associations';

const app = express();
app.use(express.json());

import cookieParser from "cookie-parser";
app.use(cookieParser()); 

import clientRoute from './routers/client';
app.use("/api/v1", clientRoute);


import productRoute from "./modules/product/product.router";
import categoryRoute from "./modules/category/category.router";
import userRoute from "./modules/user/user.router";
import { authMiddleware, isAdmin } from "./middleware/auth";

app.use(authMiddleware);
app.use(isAdmin);

const adminBaseUrl = "/api/v1/ad";
app.use(`${adminBaseUrl}/product`, productRoute);
app.use(`${adminBaseUrl}/category`, categoryRoute);
app.use(`${adminBaseUrl}/user`, userRoute);


// (async () => {
//   await sequelize.sync({ alter: true });
// })();

app.listen(3000, () => {
  console.log("Express app running on port 3000");
});
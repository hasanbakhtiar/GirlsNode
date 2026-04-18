import express from "express";
import sequelize from "./config/connectdb";
import productRoute from "./modules/product/product.router";
import categoryRoute from "./modules/category/category.router";
import { Products } from "./modules/product/product.model";
import Categories from "./modules/category/category.model";

const app = express();
app.use(express.json());

app.use("/product", productRoute);
app.use("/category", categoryRoute);

// async function setupAssociations() {
//   Products.belongsToMany(Categories, {
//     foreignKey: {
//       allowNull: true,
//     },
//   });
// }

// setupAssociations();

// (async () => {
//   await sequelize.sync({ alter: true });
// })();

app.listen(3000, () => {
  console.log("Express app running on port 3000");
});
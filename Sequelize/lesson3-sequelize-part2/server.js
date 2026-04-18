const express = require('express');
const app = express();
const sequelize = require('./config/sequelize');
app.use(express.json());

const productRoute = require('./modules/product/product.router');
app.use('/product', productRoute);

const categoryRoute = require('./modules/category/category.router');
const Products = require('./modules/product/product.model');
const Categories = require('./modules/category/category.model');
app.use('/category', categoryRoute);


async function async() {
    Products.belongsToMany(Categories, {
        foreignKey: {
            allowNull: true
        }
    })
     
}
// async();

// (async () => {
//     await sequelize.sync({ alter: true })
// })()

app.listen(3000, () => {
    console.log('Express app running on port 3000');

})
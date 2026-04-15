const { DataTypes } = require("sequelize");
const sequelize = require("../../config/sequelize");

const Products = sequelize.define("products", {
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    }
});

module.exports = Products;
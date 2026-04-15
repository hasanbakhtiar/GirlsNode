const { DataTypes } = require("sequelize");
const sequelize = require("../../config/sequelize");

const Categories = sequelize.define("categories", {
    title: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Categories;
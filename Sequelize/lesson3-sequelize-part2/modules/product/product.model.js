const { DataTypes } = require("sequelize");
const sequelize = require("../../config/sequelize");
const Joi = require("joi");

const Products = sequelize.define("products", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

const validateProduct = (data) => {
  const schema = Joi.object({
    title: Joi.string().allow("", null).optional(),
    price: Joi.number().integer().allow(null).optional(),
    description: Joi.string().allow("", null).optional(),
    active: Joi.boolean().allow(null).optional(),
    categoryId: Joi.number().allow(null).optional(),
  });

  return schema.validate(data);
};

module.exports = { Products, validateProduct };

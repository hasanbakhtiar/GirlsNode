import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/connectdb";
import Joi from "joi";
import { ProductType } from "./product.type";

const Products = sequelize.define<Model<ProductType>>("products", {
  image: { type: DataTypes.STRING, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false },
  slug: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: true },
  description: { type: DataTypes.TEXT, allowNull: true },
  active: { type: DataTypes.BOOLEAN, allowNull: true },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: { model: "categories", key: "id" },
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  },
});

const validateProduct = (data: object) => {
  const schema = Joi.object({
    image: Joi.string().allow("", null).optional(),
    title: Joi.string().allow("", null).optional(),
    slug: Joi.string().allow("", null).optional(),
    price: Joi.number().integer().allow(null).optional(),
    description: Joi.string().allow("", null).optional(),
    active: Joi.boolean().allow(null).optional(),
    categoryId: Joi.number().allow(null).optional(),
  });

  return schema.validate(data);
};

export { Products, validateProduct };
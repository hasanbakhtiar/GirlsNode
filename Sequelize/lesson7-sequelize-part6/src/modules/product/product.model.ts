import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../config/connectdb";
import Joi from "joi";
import type { ProductAttributes } from "./product.type";

interface ProductCreationAttributes extends Optional<ProductAttributes, "id"> {}

class Products extends Model<ProductAttributes, ProductCreationAttributes>
  implements ProductAttributes {
  public id!: number;
  public image!: string;
  public title!: string;
  public price!: number | null;
  public description!: string | null;
  public active!: boolean | null;
  public categoryId!: number | null;
}

Products.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    image: { type: DataTypes.STRING, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
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
  },
  { sequelize, modelName: "products" }
);

const validateProduct = (data: Partial<ProductAttributes>) => {
  const schema = Joi.object({
    image: Joi.string().allow("", null).optional(),
    title: Joi.string().allow("", null).optional(),
    price: Joi.number().integer().allow(null).optional(),
    description: Joi.string().allow("", null).optional(),
    active: Joi.boolean().allow(null).optional(),
    categoryId: Joi.number().allow(null).optional(),
  });

  return schema.validate(data);
};

export { Products, validateProduct };
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../config/connectdb";
import Joi from "joi";

interface ProductAttributes {
  id?: number;
  title: string;
  price?: number | null;
  description?: string | null;
  active?: boolean | null;
  categoryId?: number | null;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, "id"> {}

class Products extends Model<ProductAttributes, ProductCreationAttributes>
  implements ProductAttributes {
  public id!: number;
  public title!: string;
  public price!: number | null;
  public description!: string | null;
  public active!: boolean | null;
  public categoryId!: number | null;
}

Products.init(
  {
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
  },
  {
    sequelize,
    modelName: "products",
  }
);

const validateProduct = (data: Partial<ProductAttributes>) => {
  const schema = Joi.object({
    title: Joi.string().allow("", null).optional(),
    price: Joi.number().integer().allow(null).optional(),
    description: Joi.string().allow("", null).optional(),
    active: Joi.boolean().allow(null).optional(),
    categoryId: Joi.number().allow(null).optional(),
  });

  return schema.validate(data);
};

export { Products, validateProduct };
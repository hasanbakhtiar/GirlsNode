import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../config/connectdb";
import Joi from "joi";
import type { CategoryAttributes } from "./category.type";

interface CategoryCreationAttributes extends Optional<CategoryAttributes, "id"> {}

class Categories extends Model<CategoryAttributes, CategoryCreationAttributes>
  implements CategoryAttributes {
  public id!: number;
  public title!: string | null;
}

Categories.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: { type: DataTypes.STRING, allowNull: true },
  },
  { sequelize, modelName: "categories" }
);

const validateCategory = (data: Partial<CategoryAttributes>) => {
  const schema = Joi.object({
    title: Joi.string().allow("", null).optional(),
  });

  return schema.validate(data);
};

export default Categories;
export { validateCategory };
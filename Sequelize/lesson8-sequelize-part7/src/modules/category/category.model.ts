import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/connectdb";
import Joi from "joi";
import { CategoryType } from "./category.type";



const Categories = sequelize.define<Model<CategoryType>>("categories", {
  title: { type: DataTypes.STRING, allowNull: true },
});

const validateCategory = (data: Partial<CategoryType>) => {
  const schema = Joi.object({
    title: Joi.string().allow("", null).optional(),
  });

  return schema.validate(data);
};

export default Categories;
export { validateCategory };
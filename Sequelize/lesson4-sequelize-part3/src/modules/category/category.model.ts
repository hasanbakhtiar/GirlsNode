import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../config/connectdb";

interface CategoryAttributes {
  id?: number;
  title?: string | null;
}

interface CategoryCreationAttributes extends Optional<CategoryAttributes, "id"> {}

class Categories extends Model<CategoryAttributes, CategoryCreationAttributes>
  implements CategoryAttributes {
  public id!: number;
  public title!: string | null;
}

Categories.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "categories",
  }
);

export default Categories;
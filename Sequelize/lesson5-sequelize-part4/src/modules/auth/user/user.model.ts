import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../../config/connectdb";
import Joi from "joi";
import type { UserAttributes } from "./user.type";

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class Users extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes {
  public id!: number;
  public fullname!: string;
  public password!: string;
  public email!: string;
  public phone!: string | null;
  public role!: "user" | "admin";
  public accessToken!: string | null;
  public refreshToken!: string | null;
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: {
      type: DataTypes.ENUM("user", "admin"),
      allowNull: false,
      defaultValue: "user",
    },
    accessToken: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    refreshToken: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  { sequelize, modelName: "users" }
);

const validateUser = (data: Partial<UserAttributes>) => {
  const schema = Joi.object({
    fullname: Joi.string().allow("", null).optional(),
    password: Joi.string().allow("", null).optional(),
    email: Joi.string().email().allow("", null).optional(),
    phone: Joi.string().allow("", null).optional(),
    role: Joi.string().valid("user", "admin").optional(),
    accessToken: Joi.string().allow("", null).optional(),
    refreshToken: Joi.string().allow("", null).optional(),
  });

  return schema.validate(data);
};

export { Users, validateUser };
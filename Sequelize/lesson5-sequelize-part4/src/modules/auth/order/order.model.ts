import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../../config/connectdb";
import Joi from "joi";
import type { OrderAttributes } from "./order.type";

interface OrderCreationAttributes extends Optional<OrderAttributes, "id"> { }

class Orders extends Model<OrderAttributes, OrderCreationAttributes>
    implements OrderAttributes {
    public id!: number;
    public userId!: number;
    public productId!: number;
    public address!: string;
    public totalAmount!: number;
}

Orders.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: "users", key: "id" },
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: "products", key: "id" },
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        totalAmount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    { sequelize, modelName: "orders" }
);

const validateOrder = (data: Partial<OrderAttributes>) => {
    const schema = Joi.object({
        userId: Joi.number().optional(),
        productId: Joi.number().optional(),
        address: Joi.string().allow("", null).optional(),
        totalAmount: Joi.number().optional(),
    });

    return schema.validate(data);
};

export { Orders, validateOrder };
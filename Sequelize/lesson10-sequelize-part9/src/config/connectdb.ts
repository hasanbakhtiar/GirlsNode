import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME!,
    process.env.DB_USER!,
    process.env.DB_PASS || '',
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: "mysql",
        define: {
            timestamps: true
        }
    }
);

const connect = async function () {
    try {
        await sequelize.authenticate();
        console.log("mysql connection is successfully");
    } catch (error) {
        console.log(error);
    }
}
connect();

export default sequelize;
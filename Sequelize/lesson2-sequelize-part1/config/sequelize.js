const config = require('.');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: "mysql",
    define: {
        timestamps: true
    }
});


const connect = async function () {
    try {
        await sequelize.authenticate();
        console.log("mysql connection is successfully");
    } catch (error) {
        console.log(error);

    }
}
connect();
module.exports = sequelize;
const { default: mongoose } = require("mongoose");


const connectdb = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster.pzgenzv.mongodb.net/${process.env.MONGODB_DB_NAME}?appName=${process.env.MONGODB_CLUSTER_NAME}`);
        console.log('mongodb connected');

    } catch (error) {
        console.log(error);
    }
}

module.exports = connectdb;
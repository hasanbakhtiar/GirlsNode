const { default: mongoose } = require("mongoose");


const connectdb = async () => {
    try {
        await mongoose.connect("mongodb+srv://nodemailler:zCeHYiLfqOldXXu4@cluster.t9skxq8.mongodb.net/?appName=Cluster");
        console.log('mongodb connected');

    } catch (error) {
        console.log(error);
    }
}

module.exports = connectdb;
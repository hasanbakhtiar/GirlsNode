const { default: mongoose } = require("mongoose");


const connectdb = async () => {
    try {
        await mongoose.connect("mongodb+srv://girlsnode:girlsnode@cluster.efqjns1.mongodb.net/?appName=Cluster");
        console.log('mongodb connected');

    } catch (error) {
        console.log(error);
    }
}

module.exports = connectdb;
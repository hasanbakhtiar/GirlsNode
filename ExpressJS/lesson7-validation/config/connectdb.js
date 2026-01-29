const { default: mongoose } = require("mongoose");

const pass = "girlsnode2026"

const connectdb = async () => {
    try {
        await mongoose.connect(`mongodb+srv://girlsnode:${pass}@cluster.juukk7m.mongodb.net/?appName=Cluster`);
        console.log('mongodb connected');

    } catch (error) {
        console.log(error);
    }
}

module.exports = connectdb;
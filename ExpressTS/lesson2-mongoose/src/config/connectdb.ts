import mongoose from "mongoose";


const connectdb = async () => {
    try {
        await mongoose.connect(`mongodb+srv://girls_node_ts:girls_node_ts_password@cluster.egglwbh.mongodb.net/?appName=Cluster`);
        console.log('mongodb connected');

    } catch (error) {
        console.log(error);
    }
}

export default connectdb;
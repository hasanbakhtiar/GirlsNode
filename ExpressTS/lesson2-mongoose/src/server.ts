import express from 'express';
import connectdb from './config/connectdb';
const app = express();


connectdb();
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})



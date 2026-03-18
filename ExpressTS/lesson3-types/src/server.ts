import express, { Request, Response } from 'express';
import connectdb from './config/connectdb';
const app = express();



import productRouter from './routers/product';
app.use('/product', productRouter);

app.use('/', (req: Request, res: Response) => {
    res.send("Start App")
})

connectdb();
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})



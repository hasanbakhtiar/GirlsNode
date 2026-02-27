const express = require('express');
const connectdb = require('./config/connectdb');
const app = express();

app.use(express.json());

const surfaceRoute = require('./routers/client/surface');
app.use('/', surfaceRoute);


const productRoute = require('./routers/admin/product');
app.use('/ad/product', productRoute);

const userRoute = require('./routers/admin/user');
app.use('/ad/user', userRoute);

connectdb();
app.listen(3000, () => {
    console.log("Server is running  at 3000");
})
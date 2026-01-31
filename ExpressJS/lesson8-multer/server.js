const express = require('express');
const app = express();
const connectdb = require('./config/connectdb');
const cors = require('cors');

// Middleware Start
app.use(express.json());
app.use(cors());
// Middleware End

const productRouter = require('./routes/product');
const categoryRouter = require('./routes/category');

app.use('/product', productRouter);
app.use('/category', categoryRouter);
app.use('/', (req, res) => {
    res.status(200).send("App Start");
});



connectdb();
app.listen(3000, () => {
    console.log("Express server running at port 3000");
})



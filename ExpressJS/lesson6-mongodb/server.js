const express = require('express');
const app = express();
const connectdb = require('./config/connectdb');

// Middleware Start
app.use(express.json());
// Middleware End

const productRouter = require('./routes/product');

app.use('/product', productRouter);
app.use('/', (req, res) => {
    res.status(200).send("App Start");
});



connectdb();
app.listen(3000, () => {
    console.log("Express server running at port 3000");
})



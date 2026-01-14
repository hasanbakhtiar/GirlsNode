const express = require('express');
const app = express();

// Middleware Start
app.use(express.json());
// Middleware End

const productRouter = require('./routes/product');

app.use('/product', productRouter);
app.use('/', (req, res) => {
    res.status(200).send("App Start");
});

app.listen(3000, () => {
    console.log("Express server running at port 3000");
})



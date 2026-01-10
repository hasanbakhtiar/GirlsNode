const express = require('express');
const app = express();

// Middleware Start
app.use(express.json());
// Middleware End

const homeRouter = require('./routes/home');
const productRouter = require('./routes/product');
const contactRouter = require('./routes/contact');

app.use('/contact', contactRouter);
app.use('/product', productRouter);
app.use('/', homeRouter);

app.listen(3000, () => {
    console.log("Express server running at port 3000");

})



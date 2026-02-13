const express = require('express');
const app = express();
const cors = require('cors');
const connectdb = require('./config/connectdb');


// Middleware Start
require('dotenv').config();
app.use(express.json());
app.use(cors());
// Middleware End

// Swagger Start
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// Swagger End



// Api Start Name Start
const clintStartApi = "/api/v1";
const adminStartApi = "/api/v1/ad";
// Api Start Name End


// Surface Router Start
const surfaceRouter = require('./routers/client/surface');
app.use(`${clintStartApi}`, surfaceRouter);
// Surface Router End



// Admin Router Start
const materialRouter = require('./routers/admin/material');
app.use(`${adminStartApi}/material`, materialRouter);

const colorRouter = require('./routers/admin/color');
app.use(`${adminStartApi}/color`, colorRouter);

const productRouter = require('./routers/admin/product');
app.use(`${adminStartApi}/product`, productRouter);
// Admin Router End



connectdb();

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
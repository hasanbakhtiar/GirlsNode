const express = require('express');
const app = express();
const cors = require('cors');


// Middleware Start
require('dotenv').config();
app.use(express.json());
app.use(cors());
// Middleware End







app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
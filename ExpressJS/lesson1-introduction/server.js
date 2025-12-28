const express = require('express');
const app = express();



app.use('/about', (req, res) => {
    res.status(200).send('About page')
});

app.use('/', (req, res) => {
    res.status(200).send("Hello World");
});


app.listen(3000, () => {
    console.log("Express server running on port 3000");
})

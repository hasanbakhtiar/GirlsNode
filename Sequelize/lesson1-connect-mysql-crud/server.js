const express = require('express');
const app = express();
const connection = require('./config/connect.js');

app.use(express.json());



app.get('/product', (req, res) => {
    const sql = `SELECT * FROM products ORDER BY title DESC`;
    connection.query(sql, (err, result, fileds) => {
        if (err instanceof Error) {
            console.log(err);
            res.send(err);
            return;
        } else {
            res.send(result, fileds)
        }
    })
})



app.delete('/product/:id', (req, res) => {
    const sql = `DELETE FROM products WHERE id=${req.params.id}`;
    connection.query(sql, (err, result, fileds) => {
        if (err instanceof Error) {
            console.log(err);
            res.send(err);
            return;
        } else {
            res.send(result, fileds)
        }
    })
})


app.put('/product/:id', (req, res) => {
    const sql = `UPDATE products SET title="${req.body.title}", price=${req.body.price} WHERE id=${req.params.id}`

    connection.query(sql, (err, result, fileds) => {
        if (err instanceof Error) {
            console.log(err);
            res.send(err);
            return;
        } else {
            res.send(result, fileds)
        }
    })
})


app.post('/product', (req, res) => {
    const sql = `INSERT INTO products (title,price,description) VALUES ("${req.body.title}",${req.body.price},"${req.body.description}")`

    connection.query(sql, (err, result, fileds) => {
        if (err instanceof Error) {
            console.log(err);
            res.send(err);
            return;
        } else {
            res.send(result, fileds)
        }
    })
})

app.listen(3000, () => {
    console.log('Express app running on port 3000');

})
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('pages/index.html', (err, html) => {
            if (err) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write("<h1>Texniki xeta bash verdi. Zehmet olmasa sehifeni yenileyin.</h1>");
                res.end();

            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(html);
                res.end();
            }

        })
    } else if (req.url === '/about') {
        fs.readFile('template/about.html', (err, html) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(html);
            res.end();
        })
    } else if (req.url === '/contact') {
        fs.readFile('template/contact.html', (err, html) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(html);
            res.end();
        })
    } else {
        fs.readFile('template/notfoundpage.html', (err, html) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(html);
            res.end();
        })
    }
});


server.listen(3000);
console.log('NodeJs server at port 3000');



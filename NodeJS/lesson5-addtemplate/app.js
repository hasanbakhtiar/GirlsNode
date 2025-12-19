const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    // 🔹 STATIC FILES (CSS, JS, IMG, FONT)
    if (req.url.startsWith('/css') || 
        req.url.startsWith('/fontawesome') ||
        req.url.startsWith('/js') ||
        req.url.startsWith('/images')) {

        const filePath = path.join(__dirname, 'template', req.url);
        const ext = path.extname(filePath);

        const mimeTypes = {
            '.css': 'text/css',
            '.js': 'text/javascript',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.svg': 'image/svg+xml',
            '.woff': 'font/woff',
            '.woff2': 'font/woff2',
            '.ttf': 'font/ttf'
        };

        fs.readFile(filePath, (err, file) => {
            if (err) {
                res.writeHead(404);
                res.end('File not found');
                return;
            }

            res.writeHead(200, {
                'Content-Type': mimeTypes[ext] || 'application/octet-stream'
            });
            res.end(file);
        });

        return;
    }

    // 🔹 HTML ROUTES
    const sendHtml = (fileName) => {
        fs.readFile(path.join(__dirname, 'template', fileName), (err, html) => {
            if (err) {
                res.writeHead(500);
                res.end('Server error');
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
        });
    };

    if (req.url === '/') sendHtml('index.html');
    else if (req.url === '/about') sendHtml('about.html');
    else if (req.url === '/contact') sendHtml('contact.html');
    else sendHtml('notfoundpage.html');
});

server.listen(3000);
console.log('Server running on http://localhost:3000');

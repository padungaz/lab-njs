const http = require('http');
let users = [];
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/add-user" method="POST"><input type="text" name="username"><button type="submit">Add User</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users' && method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Users</title><head>');
        res.write('<body><ul>');
        users.forEach(user => {
            res.write(`<li>${user}</li>`);
        });
        res.write('</ul></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/add-user' && method === 'POST') {
        const chunks = [];
        req.on('data', chunk => {
            chunks.push(chunk);
        });
        req.on('end', () => {
            const body = Buffer.concat(chunks).toString();
            const username = body.split('=')[1];
            users.push(username);
            res.statusCode = 302;
            res.setHeader('Location', '/users');
            return res.end();
        });
    }
});

server.listen(3000);

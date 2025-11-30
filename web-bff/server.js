import { createServer } from 'node:http';
import dotenv from 'dotenv';

const hostname = process.env.BASE_URL || 'http://127.0.0.1:4000';
const port = 4000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}`);
});

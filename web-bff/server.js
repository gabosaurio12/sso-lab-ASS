import { createServer } from 'node:http';
import dotenv from 'dotenv';
dotenv.config();

const hostname = process.env.BASE_URL || '127.0.0.1';
const port = process.env.PORT || 3000;

const server = createServer(options, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

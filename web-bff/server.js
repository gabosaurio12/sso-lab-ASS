import { createServer } from "node:https";
import { readFileSync } from "node:fs";
import dotenv from "dotenv";

dotenv.config();

const hostname = process.env.BASE_URL || '127.0.0.1';

const options = {
  key: readFileSync(new URL("./ssl/localhost.key", import.meta.url)),
  cert: readFileSync(new URL("./ssl/localhost.crt", import.meta.url)),
};

const port = process.env.PORT || 443;

const server = createServer(options, (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Hola Mundo HTTPS ");
});


server.listen(port, hostname, () => {
  console.log(`Server running on https://${hostname}:${port} AND https://127.0.0.1:${port}`);
});

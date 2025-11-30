import { createServer } from "node:https";
import { readFileSync } from "node:fs";
import dotenv from "dotenv";

dotenv.config();

const hostname = process.env.BASE_URL || "0.0.0.0"

const options = {
  key: readFileSync(new URL("./ssl/localhost.key", import.meta.url)),
  cert: readFileSync(new URL("./ssl/localhost.crt", import.meta.url)),
};

const port = process.env.PORT || 3443;

const server = createServer(options, (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Hola Mundo HTTPS ");
});


server.listen(port, "0.0.0.0", () => {
  console.log(`Server running on https://${hostname}:${port}`);
});

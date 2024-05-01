import { readFile } from "node:fs";
import http, { createServer } from "node:http";

const PORT = process.env.PORT || "3000";
const HOSTNAME = process.env.HOSTNAME || "0.0.0.0";

const server = http.createServer((req, res) => {
  console.log(`
>>> MAETHOD: ${req.method}
>>> HEADER : ${req.headers}
>>> URL : ${req.url}
>>> BODY : ${req.body}
`);

  if (req.url === "/home") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    readFile("./home.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write(`ERROR ${err}`);
      }
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    readFile("./about.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write(`ERROR ${err}`);
      }
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    readFile("./index.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write(`ERROR ${err}`);
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server listening on PORT ${server.address().port}`);
});

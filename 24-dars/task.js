import http from "node:http";

const PORT = process.env.PORT || "3000";
const HOSTNAME = process.env.HOSTNAME || "0.0.0.0";

const server = http.createServer((req, res) => {
  res.write(`
>>> MAETHOD: ${req.method}
>>> HEADER : ${req.headers}
>>> URL : ${req.url}
>>> BODY : ${req.body}
`);
  res.write(req);
  res.end();
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running on PORT: ${server.address().port}`);
});

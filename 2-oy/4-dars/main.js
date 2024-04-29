import url from "node:url";

const URL = "https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash";

const parsedURL = url.parse(URL);

parsedURL.auth = "xamidullo:1234";

// console.log(parsedURL);
const obj = {
  protocol: "https:",
  slashes: true,
  auth: "xamidullo:1234",
  host: "sub.example.com:8080",
  port: "8080",
  hostname: "sub.example.com",
  hash: "#hash",
  search: "?query=string",
  query: "query=string",
  pathname: "/p/a/t/h",
  path: "/p/a/t/h?query=string",
  href: "https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash",
};

console.log(url.format(obj));

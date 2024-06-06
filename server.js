import express from "express";
const app = express();
app.set("view engine", "ejs");
const users = [
  {
    name: "Ali",
    age: 12,
  },
  {
    name: "Belol",
    age: 13,
  },
];

app.get("/", (req, res) => {
  res.render("pages/index", {
    title: "Hello ejs",
    users,
  });
});
app.get("/home", (req, res) => {
  res.render("pages/home", {
    title: "Hello ejs",
    users,
  });
});

app.get("/about", (req, res) => {
  res.render("pages/about", {
    title: "Hello ejs",
    users,
  });
});

const data = {
  name: "ali",
  hobbies: ["cs", "cs:go", "dota", "CS:16"],
};
app.get("/test", (req, res) => {
  res.render("pages/test", {
    name: "Hello ejs",
    data,
  });
});

app.get("/users", (req, res) => {
  res.render("pages/users", {
    email: "test@test.com",
    username: "abdvali",
    age: 33,
  });
});

const userData = {
    username: 'Anshul Ojha',
    age: 20,
    email: 'anshul@example.com',
    rawHTML: '<strong>This is <em>raw</em> HTML content.</strong>'
};
app.get("/users2", (req, res) => {
  res.render("pages/users", {
  ...userData
  });
});

app.get("/", (req, res) => {
  res.render("pages/error", {
    title: "Hello ejs",
    users,
  });
});

app.listen(4000);

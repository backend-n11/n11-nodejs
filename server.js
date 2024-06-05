import express from "express";
const app = express()
app.set('view engine', 'ejs');
const users = [
  {
    name: "Ali",
    age: 12
  },
  {
    name: "Belol",
    age: 13
  }
]
app.get("/", (req, res) => {
  res.render("pages/index", {
    title: "Hello ejs",
    users,
  })
})
app.get("/home", (req, res) => {
  res.render("pages/home", {
    title: "Hello ejs",
    users,
  })
})
app.get("/about", (req, res) => {
  res.render("pages/about", {
    title: "Hello ejs",
    users,
  })
})


app.get("/", (req, res) => {
  res.render("pages/error", {
    title: "Hello ejs",
    users,
  })
})


app.listen(4000)
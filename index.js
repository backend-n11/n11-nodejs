import express from "express";



const app = express()



app.get("/api", (req, res) => {
  const query = req.query
  console.log(query)
  res.send("DEBUG")
})


app.get("/", (req, res) => {

  res.send("DEBUG")
})

app.listen(5000)
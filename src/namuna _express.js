import express from "express"


const app = express()


app.get("/", (req, res) => {
  res.send("OK")
})


app.get("/users", (req, res) => {
  res.send("OK")
})

app.post("/users", (req, res) => {
  res.send("OK")
})



app.listen(3000, () => {
  console.log(`Server is running on PORT 3000`)
})
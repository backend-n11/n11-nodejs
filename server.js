import express from "express"
import { Database } from "./db.js"

const app = express()

const PORT = 3000


const db = new Database()

app.use(express.json())


app.post("/register", async (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    return res.status(400).send("Invalid alue")
  }

  const newUser = await db.create(name, email, password)
  res.send(newUser)
})


app.post("/login", async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).send("Invalid alue")
  }
  const newUser = await db.findByEmail(email)
  res.send(newUser)
})

app.listen(PORT, () => {
  console.log("server is running on port :3000")
})
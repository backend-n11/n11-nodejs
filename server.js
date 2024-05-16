import express from "express"
import dotenv from "dotenv"
import { authMiddleware } from "./middleware/auth.js"
dotenv.config()


const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())

app.use(authMiddleware)


app.get("/user", (req, res) => {
  res.send("user")
})

app.post("/register", (req, res) => {
  console.log(req.body)
  res.send("user")
})



app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
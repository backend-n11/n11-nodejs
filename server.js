import express from "express"
import authRouter from "./routes/auth.js"
import dotenv from "dotenv"
dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use("/auth", authRouter)

app.listen(PORT, () => {
  console.log(`server is running on port :${PORT}`)
})

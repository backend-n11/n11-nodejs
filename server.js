import express from "express"
import authRouter from "./routes/auth.js"
import setUpRouter from "./routes/setUpRouter.js"
import dotenv from "dotenv"
dotenv.config()
import comentRouter from './routes/comments.js'

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use("/auth", authRouter)
app.use('/comment', comentRouter)


app.use("/setup", setUpRouter)



app.listen(PORT, () => {
  console.log(`server is running on port :${PORT}`)
})

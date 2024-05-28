import dotenv from "dotenv"
import express from "express"
import routes from "./src/routes/index.js"
import mongoose from "mongoose"
import helmet from "helmet"
dotenv.config()

const NODE_ENV = process.env.NODE_ENV
const MONGO_URI = process.env.MONGO_URI


try {
  const db = await mongoose.connect(MONGO_URI)
  console.log('DATABASE CONNECTED')
} catch (error) {
  console.error(error);
}



const app = express()

app.use(helmet());
app.use(express.json())

app.use(routes)

if (NODE_ENV !== 'production') {
  console.log(("Hello DEVELOPER"))
}


export default app

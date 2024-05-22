import dotenv from "dotenv"
import express from "express"
import {
    registerRoute,
    loginRoute
} from "./src/routes/index.js"
dotenv.config()

const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

const app = express()

app.use('/register', registerRoute)
app.use('/login', loginRoute)

if (NODE_ENV !== 'production') {
    console.log(("Hello DEVELOPER"))
}

app.listen(PORT, () => {
    console.log(`Server is running on port :${PORT}`)
})

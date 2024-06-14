import express from "express"
import userRoute from "./routes/users.routes.js"

const app = express()

app.use(express.json())



//routes
app.use(userRoute)

export {
	app 
}
import express from "express"

import { router as registerRouter } from "./routes/users.route.js"
import { router as blogRouter } from "./routes/blog.route.js"
const app = express()

app.use(express.json())

// "V" -> ASCII -> Binary
// "V" - > 86 -> 1010100101
// 1010100101 -> 86 -> "V"

app.use('/register', registerRouter)
app.use('/blog', blogRouter)

// app.post('/login ', (req, res) => {
// })

// app.use("/register", registerRoute)
// app.use("/login", loginRoute)
// app.use("/blog", loginRoute)


app.listen(3000)

import express from "express"
import { router as usersRouter } from "./routes/users.js"
import { router as ProcutsRouter } from "./routes/products.router.js"
import { router as adminRouter } from "./routes/admin.js"

const app = express()

app.use(express.json())

app.use("/products", ProcutsRouter)


// app.use("/users", usersRouter)

// app.use("/register", usersRouter)
// app.use("/login", usersRouter)
// app.use("/admin", adminRouter)




app.listen(3000, () => {
  console.log(`Server is running on PORT 3000`)
})
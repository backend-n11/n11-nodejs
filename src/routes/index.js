import {
    Router
} from "express";
import loginRoute from "./login.route.js"
import registerRoute from "./register.route.js"

const router = Router()

router.use('/register', registerRoute)
router.use('/login', loginRoute)

export default router

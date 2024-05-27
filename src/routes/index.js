import {
    Router
} from "express";
import loginRoute from "./login.routes.js"
import registerRoute from "./register.routes.js"
import adminRoute from "./admin.routes.js"
import otpRoute from "./otp.routes.js"
import getMeRoute from "./getMe.routes.js"

const router = Router()

router.use('/admin', adminRoute)
router.use('/register', registerRoute)
router.use('/login', loginRoute)
router.use('/otp', otpRoute)
router.use('/getMe', getMeRoute)

export default router

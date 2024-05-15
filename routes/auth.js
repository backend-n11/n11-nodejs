import { Router } from "express"
import { authLoginController, authRegisterController } from "../controllers/auth.js"

const router = Router()

router.post("/register", authRegisterController)

router.post("/login", authLoginController)

export default router
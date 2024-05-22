import {
    Router
} from "express";
import {
    loginController
} from "../controllers/login.controllers.js"

const router = Router()

router.get('/', loginController)

export default router

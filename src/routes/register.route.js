import {
    Router
} from "express";
import {
    registerController
} from "../controllers/register.controllers.js"

const router = Router()

router.get('/', registerController)

export default router

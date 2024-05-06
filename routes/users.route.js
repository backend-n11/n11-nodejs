import { Router } from "express"
import { registerController } from "../controllers/user.controller.js"
export const router = new Router()


router.post("/", registerController)
// router.post("/api", registerController)
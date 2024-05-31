import { Router } from "express"
import { setUpController } from "../controllers/setUpController.js"

const router = Router()

router.post("/", setUpController)


export default router
import {
  Router
} from "express";

import {
  optController
} from "../controllers/otp.controllers.js"

const router = Router()

router.post('/', optController)

export default router

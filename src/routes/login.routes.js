import {
  Router
} from "express";

import {
  loginController
} from "../controllers/login.controllers.js"

const router = Router()

router.post('/', loginController)

export default router

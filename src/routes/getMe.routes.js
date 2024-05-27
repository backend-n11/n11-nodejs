import {
  Router
} from "express";

import {
  getMeController
} from "../controllers/getMe.controllers.js"

const router = Router()

router.get('/', getMeController)

export default router

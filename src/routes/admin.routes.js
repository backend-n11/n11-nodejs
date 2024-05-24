import {
  Router
} from "express";

import {
  adminController
} from "../controllers/admin.controllers.js"

const router = Router()

router.post('/', adminController)

export default router

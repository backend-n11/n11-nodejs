import {
  Router
} from "express";

import {
  getMeController
} from "../controllers/getMe.controllers.js"
import { verifyToken } from '../middleware/authMiddleware.js';

const router = Router()

router.get('/', verifyToken, getMeController)

export default router

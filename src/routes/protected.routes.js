import { Router } from 'express';
import protectedController from "../controllers/protected.controller.js"
const router = Router()


router.post('/', protectedController)

export default router
import { Router } from 'express';
import { getMeController } from "../controllers/user.controllers.js"
const router = Router()


router.get('/getMe', getMeController)

export default router
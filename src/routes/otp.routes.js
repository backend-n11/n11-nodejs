import { Router } from 'express';
import otpController from "../controllers/otp.controller.js"
const router = Router()


router.post('/', otpController)

export default router
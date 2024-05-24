import Joi from "joi"
import {
  delteOtp,
  findOtp
} from "../services/otp.js"
import { updateUserStaus } from '../services/user.js'
// const otpGenerator = require('otp-generator')


export const optController = async (req, res) => {
  const {
    email,
    otp
  } = req.body

  const adminSchema = Joi.object({
    email: Joi.string().email().required(),
    otp: Joi.string().length(6).required(),
  })

  const { error, value } = adminSchema.validate(req.body)
  if (error)
    return res.status(422).json({ message: error })

  const otpData = await findOtp(email)

  if (otpData.otp !== otp)
    return res.status(422).json({ message: "Invalid OTP" })



  await delteOtp(email)
  const user = await updateUserStaus(email)
  res.json(user)
}

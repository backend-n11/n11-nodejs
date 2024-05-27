import otpGenerator from 'otp-generator'
import Joi from "joi";
import { saveUser } from "../services/user.js";
import { saveOtp } from "../services/otp.js";

export const registerController = async (req, res) => {
  const { email, password } = req.body

  const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(10).required(),
  })

  const { error, value } = registerSchema.validate(req.body)

  if (error)
    return res.status(422).json({ message: error })

  const generateOtp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });

  console.log(generateOtp)
  await saveOtp(email, generateOtp)
  const user = await saveUser(email, password)

  res.json(user)
}

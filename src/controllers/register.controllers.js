import Joi from "joi";
import { saveUser } from "../services/index.js";
export const registerController = async (req, res) => {
  const { email, password, confimPassword } = req.body

  const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(10).required(),
    confimPassword: Joi.ref("password")
  })

  const { error, value } = registerSchema.validate(req.body)

  if (error)
    return res.status(421).json({ message: error })


  const user = await saveUser(email, password)

  res.json(user)
}

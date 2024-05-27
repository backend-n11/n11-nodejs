import Joi from "joi"
import {
  findUser
} from "../services/user.js"

export const loginController = async (req, res) => {
  const {
    email,
    password
  } = req.body
  const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(10).required(),
  })
  const { error, value } = registerSchema.validate(req.body)

  if (error)
    return res.status(422).json({ message: error })

  const user = await findUser(email)
  res.json(user)
}

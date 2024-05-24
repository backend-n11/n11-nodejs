import Joi from "joi"
import {
  findUser
} from "../services/user.js"

export const adminController = async (req, res) => {
  const {
    email,
    password
  } = req.body

  const adminSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(10).required(),
  })
  const { error, value } = adminSchema.validate(req.body)
  if (error)
    return res.status(421).json({ message: error })
  if (error)
    return res.status(421).json({ message: error })

  const user = await findUser(email)

  if (user.userType !== "admin")
    return res.send("Siz admin emassiz")
  console.log(user)

  res.json(user)
}

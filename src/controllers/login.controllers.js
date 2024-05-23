import {
  findUser
} from "../services/index.js"

export const loginController = async (req, res) => {
  const {
    email,
    password
  } = req.body

  const user = await findUser(email)
  res.json(user)
}

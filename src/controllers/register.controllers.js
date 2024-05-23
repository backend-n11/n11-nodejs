
import { saveUser } from "../services/index.js"

export const registerController = async (req, res) => {
  const { email, password } = req.body


  const user = await saveUser(email, password)

  res.json(user)
}

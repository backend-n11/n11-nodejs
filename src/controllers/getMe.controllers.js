import jwt from "jsonwebtoken";
import Joi from "joi"
import {
  findUser,
  getMe
} from "../services/user.js"


export const getMeController = async (req, res) => {
  const [type, token] = req.headers.authorization.split(' ')
  if (type !== 'Bearer') {
    return res.status(401).json({ error: 'Access denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.secretKey);
    const { sub } = decoded
    const user = await getMe(sub)

    res.status(200).json(user)
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
}

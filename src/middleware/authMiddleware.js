import jwt from "jsonwebtoken";
import { getMe } from '../services/user.js';

export const verifyToken = async (req, res, next) => {
  try {

    const [type, token] = req.headers.authorization.split(' ')

    if (type !== 'Bearer')
      return res.status(401).json({ error: 'Access denied' });

    const decoded = jwt.verify(token, process.env.secretKey);
    const { sub } = decoded
    const user = await getMe(sub)

    req.user = user

    next()
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: 'Invalid token' });
  }


}
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()

const authencation = (req, res, next) => {
  const [type, token] = req.headers.authorization.split(' ')
  console.log({ type, token })
  if (type !== 'Bearer')
    return res.status(401).send('JWT Invalid')


  var decoded = jwt.verify(token, process.env.JWT_ACCESS_KEY)

  req.user = decoded

  next()
}

export default authencation 

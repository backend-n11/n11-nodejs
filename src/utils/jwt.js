import jwt from "jsonwebtoken"


export const tokenGenerator = (data) => {
  var accesToken = jwt.sign(data, process.env.JWT_ACCESS_KEY, { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRESIN })

  return accesToken
}


export const tokenVerify = (token) => {
  var decoded = jwt.verify(token, JWT_ACCESS_KEY)

  return decoded
}

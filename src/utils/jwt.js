import jwt from "jsonwebtoken"

const { verify } = jwt
export const tokenGenerator = async (payload, secretKey, expiresIn) => {

  const token = await jwt.sign(payload, secretKey, {
    expiresIn,
  })
  return token
}


export const tokenVerify = async (token, secretKey) => {
  try {
    console.log(token, secretKey)
    const decoded = await verify(token, secretKey)

    return decoded
  } catch (err) {
    console.error(err)
    return false
  }
}

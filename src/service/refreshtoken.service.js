import { configuration } from '../config/configuration.js'
import { RefreshTokenModel } from '../models/index.js'
import { tokenGenerator, tokenVerify } from '../utils/jwt.js'

const { jwt } = configuration
export const refreshTokenService = async (token) => {
  const { refreshToken } = jwt
  const verify = await tokenVerify(token, refreshToken.secretKey)

  if (!verify) {
    return {
      message: "Invallid tokens"
    }
  }

  const refreshtoken = await RefreshTokenModel.findOne({
    refreshToken: token
  })

  if (!refreshToken) {
    return {
      message: "Invalid data"
    }
  }





  return {
    refreshToken: "ok"
  }
}
import { configuration } from '../config/index.js'
import { Users } from "../models/index.js"
import { RefreshTokenModel } from '../models/token.model.js'
import { tokenGenerator, tokenVerify } from '../utils/jwt.js'


const { jwt } = configuration

const loginService = async (data) => {
  try {
    const { accessToken: accessTokenKeys, refreshToken: refreshTokenKeys } = jwt
    console.log({ data })
    const user = await Users.findOne({
      email: data.email
    })

    if (!user) {
      return {
        message: "Invalid value"
      }
    }
    const payload = {
      sub: user.email,
    }


    const accesToken = await tokenGenerator(payload, accessTokenKeys.secretKey, accessTokenKeys.expiresIn)

    const refreshToken = await tokenGenerator(payload, refreshTokenKeys.secretKey, refreshTokenKeys.expiresIn)

    console.log(await tokenVerify(refreshToken, refreshTokenKeys.secretKey))

    const existRefreshToken = await RefreshTokenModel.findOne({ email: user.email })

    if (!existRefreshToken) {
      const newRefreshToken = new RefreshTokenModel({
        email: data.email,
        refreshToken
      })
      await newRefreshToken.save()
      return {
        accesToken,
        refreshToken
      }
    }

    const newRefreshToken = await RefreshTokenModel.updateOne({ email: user.email, email: user.email }, { email: user.email, refreshToken, })

    return {
      accesToken,
      refreshToken
    }
  } catch (error) {
    console.error(error)
    // throw new Error(error.mess)
  }
}


export default loginService

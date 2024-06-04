import { refreshTokenService } from '../service/refreshtoken.service.js'

export const refreshTokenController = async (req, res) => {
  try {
    const { body } = req
    //TODO: REFRESH TOKEN VALIDATE 

    const newToken = await refreshTokenService(body.token)

    res.json(newToken)
  } catch (error) {
    res.status(error).send(error.message)
  }
}

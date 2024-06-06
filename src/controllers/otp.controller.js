import { APP_ERROR_MESSAGE } from '../constants/HttpstatusCodes.js'
import otpService from '../service/otp.service.js'
import otpValication from "../validations/otp.validation.js"

const otpController = async (req, res) => {
  try {
    const { body } = req
    otpValication(body)
    const user = await otpService(body)

    res.json(user)
  } catch (error) {

    res.status(error).send(error.message)
  }
}

export default otpController
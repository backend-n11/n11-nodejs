import { APP_ERROR_MESSAGE } from '../constants/HttpstatusCodes.js'
import otpService from '../service/otp.service.js'
import otpValication from "../validations/otp.validation.js"

const otpController = async (req, res) => {
  try {
    const { body } = req
    const {error} = otpValication(body)
    if(error){
      return res.status(401).send("malumotlarni kiritishda xatolik mavjud")
    }
    const user = await otpService(body)

    res.json(user)
  } catch (error) {
    // // TODO: HANDLE VALIDATION ERROR
    // if (error.message == "Validation Error") {
    //   return res.status(400).send(APP_ERROR_MESSAGE.invalidEmail)
    // }

    // // TODO: HANDLE SERVICE ERROR
    // if (error.message == "Mongoose error") {
    //   return res.status(400).send(APP_ERROR_MESSAGE.invalidEmail)
    // }


    res.status(error).send(error.message)
  }
}

export default otpController

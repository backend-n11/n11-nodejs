import { APP_ERROR_MESSAGE } from '../constants/HttpstatusCodes.js'
import { MyError } from '../middlewares/httpErrorhandle.js'
import registerService from '../service/register.service.js'
import registerValication from "../validations/register.validation.js"

const registerController = async (req, res) => {
  try {
    const { body } = req
    registerValication(body)
    const user = await registerService(body)

    res.json(user)
  } catch (error) {
    // TODO: HANDLE VALIDATION ERROR
    if (error.message == "Validation Error") {
      return res.status(400).send(APP_ERROR_MESSAGE.invalidEmail)
    }

    // TODO: HANDLE SERVICE ERROR
    if (error.message == "Mongoose error") {
      return res.status(statusCode).send(APP_ERROR_MESSAGE.invalidEmail)
    }


    // res.status(error.statuCode).send(error.message)
  }
}

export default registerController
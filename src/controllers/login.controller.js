import loginService from '../service/login.service.js'
import registerValication from "../validations/register.validation.js"

const loginController = async (req, res) => {
  try {
    const { body } = req
    console.log({ body })
    registerValication(body)

    const accesToken = await loginService(body)
    res.send(accesToken)
  } catch (error) {
    res.status(422).send(error.message)
  }
}

export default loginController
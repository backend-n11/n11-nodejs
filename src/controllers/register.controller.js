import registerService from '../service/register.service.js'
import registerValication from "../validations/register.validation.js"

const registerController = async (req, res) => {
  try {
    const { body } = req
    registerValication(body)
    const user = await registerService(body)
    res.json(user)
  } catch (error) {
    res.status(422).send(error.message)
  }
}

export default registerController
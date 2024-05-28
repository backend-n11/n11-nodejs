import User from "../models/user.model.js"
import { tokenGenerator } from '../utils/jwt.js'


const loginService = async (data) => {
  try {

    const user = User.findOne({
      email: data.email
    })

    const token = tokenGenerator({ sub: user.email })

    return token
  } catch (error) {
    console.error(error)
  }
}


export default loginService
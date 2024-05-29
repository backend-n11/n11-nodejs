import User from "../models/user.model.js"


const registerService = async (data) => {
  try {
    const user = new User(data)
    const result = await user.save()
    return result
  } catch (error) {
    throw Error(error.message)
  }
}


export default registerService
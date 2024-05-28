import User from "../models/user.model.js"


const registerService = async (data) => {
  try {
    const user = new User(data)
    const result = await user.save()
    return result
  } catch (error) {
    console.error(error)
  }
}


export default registerService
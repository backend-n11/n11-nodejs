import Joi from "joi"

const otpSchema = Joi.object({
  email: Joi.string().email().required(),
  otp: Joi.string().length(6).required()
})


const otpValication = (data) => {
  const {error} = otpSchema.validate(data)
  if(!error){
    return true
  }
  return false
}


export default otpValication

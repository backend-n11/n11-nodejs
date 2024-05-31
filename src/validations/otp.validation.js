import Joi from "joi"

const otpSchema = Joi.object({
  email: Joi.string().email().required(),
  otp: Joi.string().length(6).required()
})


const otpValication = (data) => {
  const { error, value } = otpSchema.validate(data)
  if (error) {
    throw new Error("Validation Error")
  }
}


export default otpValication
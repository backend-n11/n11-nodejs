import Joi from "joi"

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).max(10).required(),
  role: Joi.string().valid('admin', 'user'),
})


const registerValication = (data) => {
  const { error, value } = registerSchema.validate(data)
  if (error) {
    throw new Error("Validation Error")
  }
}


export default registerValication
import { Otps, Users } from "../models/index.js"



const otpService = async (data) => {
  try {
    console.log(data)
    const usersOtp = await Otps.findOne({ email: data.email })
    console.log({ usersOtp })
    const result = usersOtp.compareOtp(data.otp)
    if (!result)
      throw new Error("OTP invalid")

    const updatedUser = await Users.updateOne({ email: data.email }, { status: true })
    await Otps.deleteOne({ email: data.email })

    return {
      message: "Yaxshi bo\'ldi!"
    }

  } catch (error) {
    throw new Error(error)
  }
}

export default otpService
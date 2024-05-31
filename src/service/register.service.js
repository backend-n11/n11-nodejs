import { Users, Otps } from "../models/index.js"
import otpGenerator from "otp-generator";
import sendMail from "../utils/sendMailer.js"

const registerService = async (data) => {
  try {
    const user = new Users(data)
    const result = await user.save()
    const otpCode = otpGenerator.generate(6, { lowerCaseAlphabets: false, specialChars: false })
    const usersOtp = new Otps({
      email: user.email,
      otp: otpCode
    })
    await sendMail(user.email, otpCode)

    const messageId = await usersOtp.save()
    if (!messageId) {
      return {
        message: "Ro'yxatdan o'tishda xatolik bo'ldi!"
      }
    }
    return {
      message: "Ro'yxatdan muvavaqiyatli o'tdiz OTP sizning emailizga bor!. uni qasdiqlang"
    }
  } catch (error) {
    throw Error(error.message)
  }
}


export default registerService
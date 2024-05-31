import mongoose from "mongoose"
const { Schema, model } = mongoose

const otpSchema = new Schema({
  email: {
    type: String,
    unique: true,
    require: true
  },
  otp: {
    type: String,
    require: true
  },
}, {
  timestamps: true,
})


otpSchema.methods.compareOtp = function (candidateOtp) {
  const result = candidateOtp == this.otp
  return result
}

export const Otps = model('otps', otpSchema);
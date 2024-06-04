import mongoose from "mongoose"
const { Schema, model } = mongoose

const tokenSchema = new Schema({
  email: {
    type: String,
    unique: true,
    require: true
  },
  refreshToken: {
    type: String,
    require: true
  },
}, {
  timestamps: true,
})


tokenSchema.methods.compareRefreshToken = function (candidaterefreshToken) {
  const result = candidaterefreshToken == this.refreshToken
  return result
}

export const RefreshTokenModel = model('refreshToken', tokenSchema);
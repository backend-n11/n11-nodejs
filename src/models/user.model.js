import bcrypt from "bcrypt";
import mongoose from "mongoose"
const { Schema, model } = mongoose

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    min: 5,
    max: 10,
    require: true
  },
  status: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
})

userSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, Number(process.env.SALT_ROUND))
  this.password = hash
  next();
});


userSchema.methods.comparePassword = function (candidatePassword) {
  const result = bcrypt.compare(candidatePassword, this.password)
  return result
}




export const Users = model('users', userSchema);
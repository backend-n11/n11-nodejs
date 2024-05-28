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
  }
}, {
  timestamps: true,
})

userSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, Number(process.env.SALT_ROUND))
  this.password = hash
  next();
});


export default model('users', userSchema);
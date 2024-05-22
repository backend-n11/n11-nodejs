import mongoose from "mongoose"

const {
  Schema,
  model
} = mongoose

const user = new Schema({
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    min: 5,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now
  },
})

export default model('users', user)

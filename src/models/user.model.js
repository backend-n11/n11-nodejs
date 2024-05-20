import mongoose, { SchemaTypes, mongo } from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    min: 18,
    max: 65,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const User = mongoose.model('User', userSchema);

const bookSchema = new mongoose.Schema({
  author: {
    type: SchemaTypes.ObjectId,
    ref: "User"
  }
});

userSchema.pre('save', function(next) {

  if (this.age > 25) {
    next(new Error("Xatolik yuz berdi!"))
  }

  next()
});



export default User;


import User from '../models/user.model.js';

export const findAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    throw new Error('Foydalanuvchilarni olishda xatolik: ' + err.message);
  }
};


export const findOneUser = async (id) => {
  try {
    const user = await User.findOne({
      _id: id
    });
    return user;
  } catch (err) {
    throw new Error('Foydalanuvchini olishda xatolik: ' + err.message);
  }
};

export const createUser = async (userData) => {
  const { name, email, age } = userData;
  const user = new User({ name, email, age });

  try {
    const savedUser = await user.save();
    return savedUser;
  } catch (err) {
    throw new Error('Foydalanuvchini yaratishda xatolik: ' + err.message);
  }
};


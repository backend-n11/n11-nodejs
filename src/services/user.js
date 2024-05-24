import User from "../models/user.js";
export const saveUser = (email, password) => {
	const newUser = new User({
		email,
		password,
	});

	newUser.save();

	return newUser;
};

export const findUser = async (email) => {

	const newUser = await User.findOne({
		email,
	})

	return newUser;
};



export const updateUserStaus = async (email) => {
	const newUser = await User.updateOne({
		email,
	}, {
		status: true
	})

	return newUser
};

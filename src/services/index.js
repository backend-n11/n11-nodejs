import User from "../models/index.js";
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
	});

	const deleteOne = await User.deleteOne({
		email,
	});

	const update = await User.updateOne(
		{
			email,
		},
		{
			email: "shavkat_boy@gmail.com",
			password: 12345,
		},
	);

	console.log(newUser);
	return newUser;
};

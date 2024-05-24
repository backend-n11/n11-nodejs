import Otp from "../models/otp.js";
export const saveOtp = (email, otp) => {

	const newOtp = new Otp({
		email,
		otp,
	});

	newOtp.save();

	return newOtp;
};

export const findOtp = async (email) => {
	const otp = await Otp.findOne({
		email,
	})

	return otp;
};


export const delteOtp = async (email) => {
	const otp = await Otp.deleteOne({
		email,
	})

	return otp;
};

import mongoose from "mongoose";

const { Schema, model } = mongoose;

const otp = new Schema({
	email: {
		type: String,
		require: true,
		unique: true
	},
	otp: {
		type: String,
		require: true,
	},
	createAt: {
		type: Date,
		default: Date.now,
	},
});



export default model("otps", otp);

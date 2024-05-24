import mongoose from "mongoose";

const { Schema, model } = mongoose;

const user = new Schema({
	email: {
		type: String,
		unique: true,
	},
	password: {
		type: String,
		min: 5,
		require: true,
	},
	userType: {
		type: String,
		enum: ['user', 'admin'],
		default: 'user'
	},
	status: {
		type: Boolean,
		default: false
	},
	createAt: {
		type: Date,
		default: Date.now,
	},
});



export default model("users", user);

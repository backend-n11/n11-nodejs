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

	createAt: {
		type: Date,
		default: Date.now,
	},
});

const book = new Schema({
	titile: String,
	authorId: {
		type: Schema.ObjectId,
		ref: user,
	},
});

export default model("users", user);

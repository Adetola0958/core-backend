import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        firstName: { type: String},
        lastName: { type: String},
		email: { type: String},
        phoneNumber: { type: String},
        status: {
			type: String,
			enum: ['active', 'blocked', 'deleted'],
			default: 'active',
		},
        state: {type: String},
        volunteer: {type: String},
        gender: {type: String}
    },
    {
        timeStamps: true,
    }
)
const User = mongoose.model('User', userSchema)

export default User
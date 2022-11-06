import mongoose from "mongoose";

const adminSchema = mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
        phoneNumber: { type: String, required: true, unique: true },
		isSuperAdmin: { type: Boolean, required: true, default: false },
		status: {
			type: String,
			enum: ['active', 'blocked', 'deleted'],
			default: 'active',
		},
    },
    {
        timeStamps: true,
    }
)

const Admin = mongoose.model('Admin', adminSchema)

export default Admin
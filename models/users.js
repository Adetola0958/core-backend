import mongoose from "mongoose";

const collaboratorSchema = mongoose.Schema(
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
        volunteer: {type: String}
    },
    {
        timeStamps: true,
    }
)
const Collaborator = mongoose.model('Collaborator', collaboratorSchema)

export default Collaborator
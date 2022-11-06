import mongoose from "mongoose";

const mailSchema = mongoose.Schema(
    {
        receiver: [
            {
                emails: {type: String, required: true}
            }
        ],
		message: { type: String, required: true },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
			ref: 'Admin',
			required: true,
        }
    },
    {
        timeStamps: true,
    }
)

const Mail = mongoose.model('Mail', mailSchema)

export default Mail
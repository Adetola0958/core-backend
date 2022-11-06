import Joi from 'joi'
import validateRequest from './validate_request.js'

const authenticateSchema = (req, res, next) => {
	const schema = Joi.object({
		email: Joi.string().required(),
		password: Joi.string().required(),
	})
	validateRequest(req, next, schema)
}

const adminRegisterSchema = (req, res, next) => {
	const schema = Joi.object({
		name: Joi.string().required(),
		email: Joi.string().email().required(),
		password: Joi.string().required(),
		phoneNumber: Joi.string().required(),
	})
	validateRequest(req, next, schema)
}

const userCompleteSchema = (req, res, next) => {
	const schema = Joi.object({
		firstName: Joi.string().required(),
		lastName: Joi.string().required(),
		password: Joi.string().required(),
		email: Joi.string().email().required(),
		phoneNumber: Joi.string().required(),
	})
	validateRequest(req, next, schema)
}

export {
	authenticateSchema,
	// otpSchema,
	adminRegisterSchema,
	// userRegistrationSchema,
	userCompleteSchema,
	// categoriesCreateSchema,
}

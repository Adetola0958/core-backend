import asyncHandler from "express-async-handler";
import {generateToken} from "../utils/generateToken.js";
//import bcrypt from "bcryptjs";
import User from "../models/user.js";
import Collaborator from "../models/users.js";

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
export const user_signup = asyncHandler(async (req, res) => {
	const { email, firstName, lastName, phoneNumber, state, volunteer } = req.body
	console.log(req.body)

	const userExists = await User.find({ phoneNumber })

	if (userExists.length > 0) {
		throw new Error('Sorry, this account already exists')
	}

	const user = await User.create({
		email,
		firstName,
		lastName,
        phoneNumber,
		state,
		volunteer
	})

	if (user) {
		res.status(201).json({
			message: 'User has been created successfully',
			status: 'ok',
			data: user,
		})
	} else {
		res.status(400)
		throw new Error('Invalid data provided.')
	}
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
export const collab_signup = asyncHandler(async (req, res) => {
	const { email, firstName, lastName, phoneNumber, state, volunteer } = req.body

	const userExists = await Collaborator.find({ phoneNumber })

	if (userExists.length > 0) {
		throw new Error('Sorry, this account already exists')
	}

	const user = await Collaborator.create({
		email,
		firstName,
		lastName,
        phoneNumber,
		state,
		volunteer
	})

	if (user) {
		res.status(201).json({
			message: 'User has been created successfully',
			status: 'ok',
			data: user,
		})
	} else {
		res.status(400)
		throw new Error('Invalid data provided.')
	}
})

// @desc    user Login
// @route   POST /api/users/login
// @access  Public
export const user_login = asyncHandler(async (req, res) => {
	const { phoneNumber, password } = req.body

	const user = await User.findOne({ phoneNumber })

	if (
		!user ||
		user.status !== 'active' ||
		!bcrypt.compareSync(password, user.password)
	) {
		throw new Error('Please check details')
	}

	res.json({
		message: 'Login successful',
		status: 'ok',
		data: {
			id: user._id,
			email: user.email,
			phoneNumber: user.phoneNumber,
			firstName: user.firstName,
			lastName: user.lastName,
			token: generateToken(user._id),
		},
	})
})

// @desc    Get single user
// @route   GET /api/users/:id
// @access  Private
export const single_user = asyncHandler(async (req, res) => {
	const user = await User.findOne({ _id: req.params.id })
	if (user) {
		res.status(201).json({
			message: 'User details',
			status: 'ok',
			data: user,
		})
	} else {
		throw new Error('User does not exist')
	}
})
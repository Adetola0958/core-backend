import express from 'express'
import { userProtect } from '../middleware/auth-handler.js'
import { userCompleteSchema } from '../middleware/schema_check.js'
import {
	user_signup,
	user_login,
	// update_user,
	single_user,
} from '../controllers/userController.js'

const router = express.Router()

router.post('/', userCompleteSchema, user_signup)
router.post('/login', user_login)

router.route('/:id')
	// .patch(userProtect, update_user)
	.get(userProtect, single_user)

export default router
import express from 'express'
import {
	collab_signup
} from '../controllers/userController.js'

const router = express.Router()

router.post('/', collab_signup)

export default router
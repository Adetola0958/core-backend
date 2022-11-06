import express from "express";
import {protect} from "../middleware/auth-handler.js"
import { 
    adminRegisterSchema,
    authenticateSchema
} from "../middleware/schema_check.js";
import { 
    admin_register,
    admin_login,
    create_mail
} from "../controllers/adminControler.js";

const router = express.Router()

router.post('/', adminRegisterSchema, admin_register)
router.post('/login', authenticateSchema, admin_login)
router.post("/mail", protect, create_mail)

export default router
import express from 'express';
import { loginUsers, registerUser } from '../Controllers/AuthController.js';

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUsers)

export default router
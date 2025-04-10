import express from 'express'
import { login, logout, signup } from '../controllers/auth.controller.js';

const router=express.Router();

// jab bhi hum /api/auth/signup use krenge toh iss function par redirect ho jayenge and same for others
router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)

export default router;
import express from 'express'
import { login, logout, signup,updateProfile,checkAuth } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';
const router=express.Router();

// jab bhi hum /api/auth/signup use krenge toh iss function par redirect ho jayenge and same for others
router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)
router.put("/update-profile",protectRoute,updateProfile)

router.get("/check",protectRoute,checkAuth)

export default router;
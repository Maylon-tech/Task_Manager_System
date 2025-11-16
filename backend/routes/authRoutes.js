import express from 'express'

import {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile
} from "../controllers/authController"

const router = express.Router()

// Auth Routes
router.post("/register", registerUser)   // Register User
router.post("/login", loginUser)   // Login User
router.get("/profile", protect, getUserProfile)   // Get User Profile
router.put("/profile", protect, updateUserProfile)  // Update Profile


export default router
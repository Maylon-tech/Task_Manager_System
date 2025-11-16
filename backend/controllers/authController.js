import User from '../models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//  Generate JWT Token
const generateToken = (userId) => {
    return jwt.sign(
        { id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" }
    )
}



// @desc Register a new user
// @route POST /api/auth/register
// @access Public
const registerUser = async (req, res) => {
    res.status(500).json({ message: "Server error"})
}


// @desc Login a new user
// @route POST /api/auth/login
// @access Private (Requires JWT)
const loginUser = async (req, res) => {
    
}

// @desc Get user profile
// @route GET /api/auth/profile
// @access Private (Requires JWT)
const getUserProfile = async (req, res) => {
    
}


// @desc Update user profile
// @route PUT /api/auth/profile
// @access Private (Requires JWT)
const updateUserProfile = async (req, res) => {
    
}

export default {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile
}
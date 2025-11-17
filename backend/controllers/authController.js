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
    try {
        const {
            name,
            email,
            password,
            profileImageUrl,
            adminInviteToken
        } = req.body

        // Check if user already exits
        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.status(400).json({ message: "User already exists" })
        }

        // Determine use role: Admin if correct token is provided, otherwise Member
        let role = "member"
        if (
            adminInviteToken &&
            adminInviteToken == process.env.ADMIN_INVITE_TOKEN
        ) {
            role = "admin"
        }

        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Create new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            profileImageUrl,
            role,
        })
        // Return user data with JWT
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            profileImageUrl: user.profileImageUrl,
            token: generateToken(user._id),
        })
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message })
    }
}

// @desc Login a new user
// @route POST /api/auth/login
// @access Private (Requires JWT)
const loginUser = async (req, res) => {
    
    try {

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message })
    }
}

// @desc Get user profile
// @route GET /api/auth/profile
// @access Private (Requires JWT)
const getUserProfile = async (req, res) => {
    
    try {

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message })
    }
}


// @desc Update user profile
// @route PUT /api/auth/profile
// @access Private (Requires JWT)
const updateUserProfile = async (req, res) => {
    
    try {

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message })
    }
}

export default {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile
}
import User from '../models/User'
import jwt from 'jsonwebtoken'

// Middleware to protect routes
const protect = async (req, resizeBy, next) => {
    try {
        let token = req.headers.authorizatoin

        if (token && token.startsWith("Bearer")) {
            token = token.split(" ")  // Extract Token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select("-password")
            next()
        } else {
            res.status(401).json({ message: "Not autorized no token " })
        }
    } catch (error) {
        res.status(401).json({ message: "Token Failed!! " })
    }
}

// Middleware for Admin-only access
const adminOnly = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next()
    } else {
        res.status(403).json({ message: "Access Deniedm admin only" })
    }
}

export default {
    protect,
    adminOnly
}
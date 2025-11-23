import User from '../models/User.js'
import jwt from 'jsonwebtoken'

// Middleware to protect routes
export const protect = async (req, resizeBy, next) => {
    try {
        let token = req.headers.authorization

        if (token && token.startsWith("Bearer")) {
            token = token.split(" ")  // Extract Token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select("-password")
            next()
        } else {
            res.status(401).json({ message: "Not autorized, no token " })
        }
    } catch (error) {
        res.status(401).json({ message: "Token Failed!! " })
    }
}

// Middleware for Admin-only access
export const adminOnly = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next()
    } else {
        res.status(403).json({ message: "Access Denided, admin only" })
    }
}

// export default {
//     protect,
//     adminOnly
// }
// require("dotenv").config()
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import path from 'path'
import connectDB from './config/db.js'

import authRoutes from './routes/authRoutes.js'

const app = express()
// Carrega as variáveis do arquivo .env
dotenv.config()

// middleware to handle CORS
app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
)

// Connect DB
connectDB()
// Middelware
app.use(express.json())

// Routes
app.use("/api/auth", authRoutes)
// app.use("/api/users", userRoutes)
// app.use("/api/tasks", taskRoutes)
// app.use("/api/reports", reportRoutes)

// Start Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log("Server is running on PORT", PORT))
import exp from 'express'
import { config } from 'dotenv'
import { connect } from 'mongoose'
import { empApp } from './APIs/EmployeeAPI.js'
import cors from 'cors'

config()

const app = exp()

// CORS middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'https://vercel.com/shivathota1323s-projects/mern-mini-app',
    credentials: true
}))

// middleware
app.use(exp.json())

// routes
app.use("/emp-api", empApp)

const port = process.env.PORT || 3000

// DB connection + server start
async function connectDB() {
    try {
        await connect(process.env.DB_URL)
        console.log("DB connected successfully")

        app.listen(port, () => {
            console.log(`Your server is running on port ${port}...`)
        })

    } catch (err) {
        console.log("Error in DB connection", err)
    }
}

connectDB()

// Global error handler
app.use((err, req, res, next) => {

    console.log(err.name)
    console.log(err.code)

    // Validation Error
    if (err.name === "ValidationError") {
        return res.status(400).json({
            message: "Error occurred in validation",
            error: err.message
        })
    }

    // Cast Error
    if (err.name === "CastError") {
        return res.status(400).json({
            message: "Error occurred",
            error: err.message
        })
    }

    // Server Error
    res.status(500).json({
        message: "Error occurred",
        error: err.message
    })
})

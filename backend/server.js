import exp from 'express'
import { config } from 'dotenv'
import { connect } from 'mongoose'
import { empApp } from './APIs/EmployeeAPI.js'
import cors from 'cors'

config()

const app = exp()

// Manual CORS middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    
    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

// middleware
app.use(exp.json())

// routes
app.get('/', (req, res) => {
    res.send("Employee API is running. Use /emp-api/employees to access data.")
})
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

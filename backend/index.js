const app = require('./app');
const Database = require('./utility/Database');
require("dotenv").config()

const PORT = process.env.PORT || 8000;

Database.connectDB()

const server = app.listen(PORT, (err) => {
    if (err) {
        console.error(err)
    }
    else console.log(`app is running on port ${PORT}`)
})

// UnCaught Exception
process.on("uncaughtException", (err) => {
    console.error(`Error: ${err.message}`)
    console.log(`shutting down server due to UnCaught Exception`)
    server.close()
})

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.error(`Error: ${err.message}`)
    console.log(err.stack)
    console.log(`shutting down server due to Unhandled Promise Rejection`)
    server.close()
})
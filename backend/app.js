const express = require('express');

const blogRoutes = require("./routes/blog.route")

const ErrorMidelware = require('./utility/ErrorMidelware');

const cors = require("cors")

const app = express();

/* MIDDELWARES */
app.use(express.json())
app.use(cors({
    origin: [
        "http://localhost:3000",
    ],
    credentials: true,
}))
app.use("/api", blogRoutes)

app.use(ErrorMidelware)

app.get("/", (req, res)=>{
    res.send("Server is running")
})
module.exports = app;
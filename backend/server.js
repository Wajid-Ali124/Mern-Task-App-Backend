const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes")
const app = express()
const cors = require("cors")

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: ["http://localhost:3000", "https://mern-task-124.onrender.com"]
}))
app.use("/api/tasks", taskRoutes)


//MIddleware
// const logger = (req, res, next) => {
//     console.log("Middleware RUN");
//     console.log(req.method);
//     next();
// }



//Route
app.get("/", (req, res) => {
    res.send("<h1>Home Sweet Home</h1>")
})


const PORT = process.env.PORT || 5000

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on Port ${PORT}`)
        })
    })
    .catch((err) => console.log(err))



//Import this in server
// const connectDB = require("./config/connectDB")

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongoose coonected`);

    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB;


//Run this code in server to Start the MongoDB Server

// const startServer = async () => {
//     try {
//         await connectDB();
//         app.listen(PORT, () => {
//             console.log(`Server is running on Port ${PORT}`)
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }

// startServer();
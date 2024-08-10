require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/dbConn')
const cors = require('cors');
const { logEvents ,logger} = require('./Middleware/logger');




const app = express();


const PORT = process.env.PORT;


connectDB();
app.use(logger)
app.use(cors(corsOptions))
app.use(express.json())



mongoose.connection.once('open', () => {
    console.log('connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
 }
)


mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})

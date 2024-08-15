const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {
        onsole.log(err)
    }
}

module.exports = connectDB
const mongoose = require('mongoose')

const connect = async () => {
    try {
        const dbConnect = await mongoose.connect(process.env.MONGOOSE_URL)
        console.log(`connection success: ${dbConnect.connection.name}`)
    } catch (error) {
        console.log(`connected to Mongoose failed : ${error.message}`)
    }
}

module.exports = connect
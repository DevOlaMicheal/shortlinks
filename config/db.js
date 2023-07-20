const mongoose = require('mongoose')

const mongoDb = async () => {
    try {
        mongoose.connect('mongodb://localhost:27017/url-shortner')
        console.log('connected')
    } catch (error) {
        console.lo(error.message)
    }
}

module.exports = mongoDb
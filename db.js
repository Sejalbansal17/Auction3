const mongoose = require('mongoose')
require('dotenv').config()
const main = async (req, res) => {
    try {
        await mongoose.connect(`mongodb://localhost:27017/Auction2`)
        console.log('Database Connected')
    } catch (error) {
        console.log(error)
    }
}
module.exports = main;

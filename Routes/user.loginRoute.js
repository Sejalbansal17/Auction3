const express = require('express')
const loginUser = require('../controller/user.loginController')
const loginRouter = express.Router()
loginRouter.post('/', loginUser)
module.exports = loginRouter
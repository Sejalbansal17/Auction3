const express = require('express')
const main = require('./db')
const dotenv = require(`dotenv`)
const registerRouter = require('./Routes/user.registerRoute');
const loginRouter = require('./Routes/user.loginRoute')
const auctionRoomRoutes = require('./Routes/auctionRoomRoutes');


const app = express()
app.use(express.json())
app.use('/api', auctionRoomRoutes);
app.use('/login', loginRouter)
app.use('/signup',  registerRouter)
app.get('/', (req, res) => {
    res.send("This is the homepage")
})
app.use((err, req, res, next) => {
    // Ensure the status code is a valid HTTP status code
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        message: err.message || 'Internal Server Error',
    });
});
app.listen(process.env.PORT, async () => {
    await main();
    console.log('server running')
})
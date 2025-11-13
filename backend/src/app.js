const express = require('express')
const userRouter = require('../src/routes/user.route')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use('/auth',userRouter)

module.exports = app
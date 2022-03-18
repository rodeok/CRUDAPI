const express = require('express');
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on("error", (error)=> console.error(error))
db.once("open", ()=> console.log("connected to db"))
app.use(express.json())
const subscriberRouter = require('./routes/subscribers.js')
app.use('/subscribers',subscriberRouter )

app.listen(3000, ()=> console.log('connected..'))
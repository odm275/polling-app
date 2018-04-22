const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')

require('./models/User')//passport will use User model; hence, User goes first.
require('./services/passport')
mongoose.connect(keys.mongoURI)
const app = express()


require('./routes/authRoutes')(app)


const PORT = 5000 || process.env.PORT
app.listen(PORT, () => console.log(`You are listening at ${PORT}`))
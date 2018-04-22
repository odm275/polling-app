const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')

require('./models/User')//passport will use User model; hence, User goes first.
require('./services/passport')
mongoose.connect(keys.mongoURI)

const app = express()

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000, 
        keys: [keys.cookieKey]
    })
)
//tell passport to use cookies
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)

const PORT = 5000 || process.env.PORT
app.listen(PORT)
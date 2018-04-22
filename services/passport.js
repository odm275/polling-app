const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('./config/keys')

const User = mongoose.model('users')

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.clientSecret,
            callbackURL: 'auth/google/callback',
        }, 
        (acessToken, refreshToken, profile, done) => {
            User.findOne( {googleId: profile.id} ).then(existingUser => {
                if(existingUser){
                    return done(null, existingUser)
                } else {
                    new User({ googleId: profile.id }).save().then(user => done(null, user))
                }
            })            
        }
    )
)


const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')

const User = mongoose.model('users')

passport.serializeUser((user, done) => {
    //this is the mongoid _id; user.id references it
    //turn user Model into cookie
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    //turn cookie into user Model instance
    User.findById(id).then(user => done(null, user))
})

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
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


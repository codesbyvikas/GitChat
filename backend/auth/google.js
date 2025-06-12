var GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");
require("dotenv").config();

 
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
  },
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    console.log(profile);
    return cb(null,profile);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
//   User.findById(id, function (err, user) {
//     done(err, user);
//   });
    done(null,user);
});
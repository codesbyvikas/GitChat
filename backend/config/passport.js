const passport = require("passport");
const User = require("../models/user");

// Serialize user ID into session
passport.serializeUser((user, done) => {
  if (!user || !user.id) {
    console.error("❌ Failed to serialize user:", user);
    return done(new Error("User object is invalid during serialization"));
  }
  done(null, user.id);
});

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    if (!user) return done(new Error("User not found"));
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// Require both strategy files AFTER serialize/deserialize are defined
require("./googleS");
require("./github");

module.exports = passport;

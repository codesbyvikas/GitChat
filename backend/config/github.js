const GitHubStrategy = require("passport-github2").Strategy;
const passport = require("passport");
const User = require("../models/user");

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.GITHUB_CALLBACK_URL,
},
async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ githubId: profile.id });

    if (!user) {
      user = await new User({
        githubId: profile.id,
        displayName: profile.displayName || profile.username,
        email: profile.emails?.[0]?.value || "no-email@github.com",
        profilePicture: profile.photos?.[0]?.value,
      }).save();
    }

    console.log("✅ GitHub strategy user to serialize:", user);
    return done(null, user); // ✅ Must be a saved Mongoose document
  } catch (err) {
    console.error("❌ Error in GitHub strategy:", err);
    return done(err, null);
  }
}));

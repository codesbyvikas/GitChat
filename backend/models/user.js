const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: { type: String },
  githubId: { type: String },
  displayName: String,
  username: String,
  email: String,
  profilePicture: String, // ✅ Add this line
  provider: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true },
  displayName: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
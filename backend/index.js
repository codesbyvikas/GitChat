const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors=require("cors");

dotenv.config();
require("./config/google");

const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");

const app = express();

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true,              
}));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Database connected");

    console.log("📦 Using database:", mongoose.connection.name);

  });
// Session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET || "defaultsecret",
    resave: false,
    saveUninitialized: false,
  })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get("/", (req, res) => {
  res.send("<a href='/auth/google'>Login with Google</a>");
});

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

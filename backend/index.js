const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables
dotenv.config();

// Passport Strategies
require("./config/google");
require("./config/github"); 

// Route files
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");

// Initialize app
const app = express();

// Enable CORS for frontend
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

// Session Middleware
app.use(session({
  secret: process.env.SESSION_SECRET || "defaultsecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, 
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24, 
  },
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get("/", (req, res) => {
  res.send(`
    <h1>GitChat Auth</h1>
    <a href='/auth/google'>Login with Google</a><br>
    <a href='/auth/github'>Login with GitHub</a>
  `);
});

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on PORT: ${PORT}`);
});

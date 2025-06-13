const router = require("express").Router();

// Middleware to protect routes
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
}

// Protected profile route (HTML response)
router.get("/", isLoggedIn, (req, res) => {
  res.send(`
    <h1>Welcome, ${req.user.displayName || req.user.username}</h1>
    <p>Email: ${req.user.email}</p>
    <img src="${req.user.profilePicture}" alt="profile picture" width="150" />
    <br />
    <a href="/auth/logout">Logout</a>
  `);
});

// API route to fetch logged-in user's data
router.get("/me", isLoggedIn, (req, res) => {
  res.json(req.user);
});

module.exports = router;

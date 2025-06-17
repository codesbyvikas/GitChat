const router = require("express").Router();

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
}

router.get("/", isLoggedIn, (req, res) => {
  res.send(`
    <h1>Welcome, ${req.user.displayName || req.user.username}</h1>
    <p>Email: ${req.user.email}</p>
    <img src="${req.user.profilePicture}" alt="profile picture" width="150" />
    <br />
    <a href="/auth/logout">Logout</a>
  `);
});

router.get("/me", isLoggedIn, (req, res) => {
  res.json(req.user);
});

module.exports = router;

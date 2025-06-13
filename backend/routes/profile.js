const router = require("express").Router();

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
}

router.get("/", isLoggedIn, (req, res) => {
  res.send(`
    <h1>Welcome, ${req.user.displayName}</h1>
    <p>Email: ${req.user.email}</p>
    <img src="${req.user.photo}" alt="profile" />
    <br />
    <a href="/auth/logout">Logout</a>
  `);
});

router.get("/me", isLoggedIn, (req, res) => {
  res.json(req.user);
});

module.exports = router;

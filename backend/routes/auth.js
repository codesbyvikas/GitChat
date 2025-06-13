const express = require("express");
const passport = require("passport");

const router = express.Router();

// ───── GOOGLE AUTH ─────
router.get("/google", passport.authenticate("google", {
  scope: ["profile", "email"],
}));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    successRedirect: "/profile",
  })
);

// ───── GITHUB AUTH ─────
router.get("/github", passport.authenticate("github", {
  scope: ["user:email"],
}));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/",
    successRedirect: "/profile",
  })
);

// ───── LOGOUT ─────
router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

module.exports = router;

const router = require("express").Router();
const path = require("path");

router.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "user-dashboard.html"));
});

module.exports = router;

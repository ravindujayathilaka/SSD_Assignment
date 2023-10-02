const { loginUser, logoutUser, createOrLogin } = require("../controllers/auth");
const router = require("express").Router();

router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.post("/google-login", createOrLogin);

module.exports = router;

const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/UserManagerControllers");

const router = express.Router();

router.post("/sign-up", registerUser);
router.post("/login", loginUser);
router.get("/current", currentUser);

module.exports = router;

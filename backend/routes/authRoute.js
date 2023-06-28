const express = require("express");
const router = express.Router();
const {
	authRegisterController,
	authLoginController,
} = require("../controllers/authController");

//Register
router.post("/register", authRegisterController);

//login
router.post("/login", authLoginController);

module.exports = router;

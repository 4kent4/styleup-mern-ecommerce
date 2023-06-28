const express = require("express");
const router = express.Router();
const {
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require("../middleware/verifyToken");
const {
	getUsers,
	getSingleUser,
	deleteUser,
	updateUser,
	userStats,
} = require("../controllers/userController");

//GET USERS
router.get("/", verifyTokenAndAdmin, getUsers);

//GET SINGLE USER
router.get("/find/:id", verifyTokenAndAdmin, getSingleUser);

//DELETE USER
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);

//UPDATE USER
router.put("/:id", verifyTokenAndAuthorization, updateUser);

//GET USER STATS
router.get("/stats", verifyTokenAndAdmin, userStats);

module.exports = router;

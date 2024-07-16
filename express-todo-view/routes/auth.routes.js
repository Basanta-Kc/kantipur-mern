const express = require("express");
const authController = require("../controllers/auth.controller");
const router = express.Router();

router.get("/sign-up", authController.signUpPage);
router.get("/sign-in", authController.signInPage);
router.post("/sign-up", authController.signUp);
router.post("/sign-in", authController.signIn);

module.exports = router;

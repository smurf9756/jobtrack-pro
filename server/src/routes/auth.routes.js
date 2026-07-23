const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth.controller");
const validate = require("../middleware/validate.middleware");
const {
  registerValidation,
  loginValidation,
} = require("../validators/auth.validator");

router.post("/register", registerValidation, validate, authController.register);

router.post("/login", loginValidation, validate, authController.login);

module.exports = router;

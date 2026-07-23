const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth.controller");
const validate = require("../middleware/validate.middleware");
const { registerValidation } = require("../validators/auth.validator");

router.post("/register", registerValidation, validate, authController.register);

module.exports = router;

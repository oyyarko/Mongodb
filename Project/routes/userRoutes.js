const express = require('express');
const router = express.Router();

const userController = require("../controller/userController");
const userValidator = require("../validator/userValidator");

router.get("/", userController.getAllUsers);
router.get("/", userValidator.validateUser, userController.createUser);

module.exports = router;
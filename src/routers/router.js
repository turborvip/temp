const express = require('express');
const router = express.Router();

const userController = require('../controller/user.controller') 

router.get("/getUser", userController.getUser);

router.get("/createUser", userController.createUser);

module.exports = router
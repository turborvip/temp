const express = require('express');
const router = express.Router();

const userController = require('../controller/user.controller') 
const homeController = require('../controller/home.controller')

router.get("/getUser", userController.getUser);

router.get("/createUser", userController.createUser);

router.get("/home", homeController.homePage);

module.exports = router
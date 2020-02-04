const express = require('express');
require('dotenv').config();

const userController = require('../controller/userController');
const { verifyToken } = require('../middleware//middleware');
const expenceController = require('../controller/expenceController');

const router = express.Router();

router.post('/login', userController.getUser);
router.post('/user', verifyToken, userController.addUser);
router.post('/expence', verifyToken, expenceController.addExpence);
router.get('/expence', expenceController.getMonthExpence);

module.exports = router;
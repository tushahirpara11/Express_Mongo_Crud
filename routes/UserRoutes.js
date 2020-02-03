const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
require('dotenv').config();

const userModel = require('../models/userDataModel');
const userController = require('../controller/userController');
const expenceController = require('../controller/expenceController');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function verifyToken(req, res, next) {
  const headers = req.headers['authorization'];
  if (typeof headers != 'undefined') {
    const getToken = headers.split(' ');
    const headToken = getToken[1];
    req.token = headToken;
    next();
  } else {
    return res.send(500, "Invalid Token");
  }
}

app.post('/add', function (req, res) {
  userController.addUser(req, res);
});

app.post('/login', function (req, res) {
  const reqData = req.body;
  jwt.sign({ reqData }, process.env.SECRET_KEY, (err, token) => {
    res.json({ token });
  });
});


app.post('/addexpence', function (req, res) {
  expenceController.addExpence(req, res);
});

app.get('/getexpence', function (req, res) {
  expenceController.getMonthwiseExpence(req, res);
});

app.get('/getexpencemonth/:month', verifyToken, function (req, res) {
  jwt.verify(req.token, process.env.SECRET_KEY, (err, auth) => {
    if (err) {
      res.send("Login Require");
    } else {
      expenceController.getExpenceMonth(req, res);
    }
  });
});

module.exports = app;
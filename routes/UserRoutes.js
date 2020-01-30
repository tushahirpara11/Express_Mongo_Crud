const express = require('express');
const bodyParser = require('body-parser');

const userController = require('../controller/userController');
const expenceController = require('../controller/expenceController');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/user/add', function (req, res) {
  userController.addUser(req, res);
});

app.post('/expence/add', function (req, res) {
  expenceController.addExpence(req, res);
});

app.get('/expences', function (req, res) {
  expenceController.getMonthwiseExpence(req, res);
});

app.get('/expences/months/:month', function (req, res) {
  expenceController.getExpenceMonth(req, res);
});

module.exports = app;
const express = require('express');
const userController = require('../controller/userController');
const expenceController = require('../controller/expenceController');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/add', function (req, res) {
  userController.addUser(req, res);
});

app.post('/addexpence', function (req, res) {
  expenceController.addExpence(req, res);
});

app.get('/getexpence', function (req, res) {
  expenceController.getMonthwiseExpence(req, res);
});

app.get('/getexpencemonth/:month', function (req, res) {
  expenceController.getExpenceMonth(req, res);
});

module.exports = app;
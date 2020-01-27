const express = require('express');
const userController = require('../controller/userController');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/add', function (req, res) {
  userController.addUser(req, res);
});
module.exports = app;
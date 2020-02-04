require('dotenv').config();
const jwt = require('jsonwebtoken');

const userModel = require('../models/userDataModel');
const { Message } = require('../commonFunctions/responceFunction');

exports.addUser = async function (req, res) {
  let addUser = new userModel.user(req.body);
  try {
    const userData = await addUser.save();
    res.json(Message(200, "true", "Completed", userData));
  } catch (err) {
    res.json(Message(false, "Error", err));
  }
}

exports.getUser = async function (req, res) {
  try {
    let userData = await userModel.findOne({ $and: [{ email: req.body.email }, { password: req.body.password }] }, { password: 0 });
    if (userData) {
      jwt.sign({ userData }, process.env.SECRET_KEY, (err, token) => {
        if (err) res.json(Message(false, "Error", err));
        res.json(Message(200, "true", "OK", token));
      });
    }
  } catch (err) {
    res.json(Message("false", "Error", err));
  }
}
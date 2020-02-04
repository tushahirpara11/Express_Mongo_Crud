const userModel = require('../models/userDataModel');
require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.addUser = async function (req, res) {
  let addUser = new userModel.user(req.body);
  try {
    const userData = await addUser.save();
    res.json({ status: true, message: "Completed", data: { userData } });
  } catch (err) {
    res.json({ status: false, message: "Error", data: { err } });
  }
}

exports.getUser = async function (req, res) {
  try {
    let userData = await userModel.findOne({ $and: [{ email: req.body.email }, { password: req.body.password }] }, { password: 0 });
    if (userData) {
      jwt.sign({ userData }, process.env.SECRET_KEY, (err, token) => {
        if (err) res.json({ status: false, message: "Error", error: err });
        res.json({ status: true, message: "OK", data: { token } });
      });
    }
  } catch (err) {
    res.json({ status: false, message: "Error", data: err });
  }
}
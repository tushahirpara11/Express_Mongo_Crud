const userModel = require('../models/userDataModel');

async function addUser(req, res) {
  let addUser = new userModel.user(req.body);
  try {
    const userData = await addUser.save();
    res.send(userData);
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = { addUser };
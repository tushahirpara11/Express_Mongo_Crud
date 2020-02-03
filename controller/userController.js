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

async function getUser(req, res) {  
  try {
    const userData = await addUser.find({ $and: [{ email: req.body.email }, { password: req.body.password }] });
    res.send(userData);
  } catch (err) {
    res.status(500).send(err);
  }
}
module.exports = { addUser, getUser };
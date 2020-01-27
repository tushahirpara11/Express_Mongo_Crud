const expenceModel = require('../models/expenceModel');

async function addExpence(req, res) {
  let addExpence = new expenceModel.expence(req.body);
  try {
    const expenceData = await addExpence.save();
    res.send(expenceData);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getMonthwiseExpence(req, res) {
  try {
    let getMonthwiseExpence = await expenceModel.aggregate([
      { $group: { _id: "month", total: { $sum: "$expence" } } }]);
    res.send(getMonthwiseExpence);
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = { addExpence, getMonthwiseExpence, getExpenceSpecificMonth };
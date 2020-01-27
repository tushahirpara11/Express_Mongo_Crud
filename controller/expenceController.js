const expenceModel = require('../models/expenceModel');

async function addExpence(req, res) {
  let addExpence = new expenceModel(req.body);
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
      { $group: { _id: "$month", total: { $sum: "$expence" } } }]);
    res.send(getMonthwiseExpence);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getExpenceMonth(req, res) {
  try {
    let getMonthwiseExpence = await expenceModel.find({ "month": req.params.month });
    res.send(getMonthwiseExpence);
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = { addExpence, getMonthwiseExpence, getExpenceMonth };
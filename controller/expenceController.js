const expenceModel = require('../models/expenceModel');
const { Message } = require('../commonFunctions/responceFuntion');

exports.addExpence = async function (req, res) {
  let addExpence = new expenceModel(req.body);
  try {
    const expenceData = await addExpence.save();
    if (expenceData.length) {
      res.json(Message(200, "true", "Data Added Successfully", expenceData));
    } else {
      res.json(Message("false", "No Data"));
    }
  } catch (err) {
    res.json(Message("false", "Error", err));
  }
}

exports.getMonthExpence = async function (req, res) {
  let expence;
  try {
    if (req.query.month) {
      expence = await expenceModel.find({ "month": req.query.month });
    } else {
      expence = await expenceModel.aggregate([
        { $group: { _id: "$month", total: { $sum: "$expence" } } }]);
    }
    if (expence.length) {
      res.json(Message(200, true, "Data Found", expence));
    } else {
      res.json(Message("false", "No Data"));
    }
  } catch (err) {
    res.json(Message("false", "Error", err));
  }
}
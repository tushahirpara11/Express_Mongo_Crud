const expenceModel = require('../models/expenceModel');

exports.addExpence = async function (req, res) {
  let addExpence = new expenceModel(req.body);
  try {
    const expenceData = await addExpence.save();
    if (expenceData.length) {
      res.json({ status: true, message: "Data Added Successfully", data: { expenceData } });
    } else {
      res.json({ status: false, message: "No Data" });
    }
  } catch (err) {
    res.json({ status: false, message: "Error", data: { err } });
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
      res.json({ status: true, message: "Data Found", data: { expence } });
    } else {
      res.json({ status: false, message: "No Data" });
    }
  } catch (err) {
    res.json({ status: false, message: "Error", data: { err } });
  }
}
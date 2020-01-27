const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenceSchema = new Schema({
  expence: {
    type: Number,
    required: false,
    trim: false,
    max:18000
  },
  month: {
    type: String,
    required: false,
    trim: false
  }
}, { versionKey: false });

const expence = mongoose.model("Expence", expenceSchema);
module.exports = expence;
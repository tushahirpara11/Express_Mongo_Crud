const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenceSchema = new Schema({
  expence: {
    type: Object,
    required: false,
    trim: false
  },
  month: {
    type: String,
    required: false,
    trim: false
  }
}, { versionKey: false });

const expence = mongoose.model("Expence", expenceSchema);
module.exports = expence;
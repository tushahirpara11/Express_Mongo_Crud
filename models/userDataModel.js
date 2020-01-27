const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  fname: {
    type: String,
    required: false,
    trim: false
  },
  lname: {
    type: String,
    required: false,
    trim: false
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  contact: {
    type: Number,
    required: false
  }
}, { versionKey: false });

const user = mongoose.model("User", userSchema);
module.exports = { user };
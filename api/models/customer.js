const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema(
  {
    name: String,
    surname: String
  },
  {
    timestamps: true
  });

module.exports = mongoose.model('Customer', CustomerSchema);

const mongoose = require("mongoose");

const demoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("demoSchema", demoSchema);

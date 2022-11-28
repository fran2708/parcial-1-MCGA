const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  price: {
    type: "number",
    required: true,
  },
  stock: {
    type: "number",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
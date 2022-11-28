const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  lastname: {
    type: "string",
    required: true,
  },
  dateofbirth: {
    type: "date",
    required: true,
  },
  dni: {
    type: "number",
    required: true,
  },
  age: {
    type: "number",
    required: true,
  },
  nationality: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
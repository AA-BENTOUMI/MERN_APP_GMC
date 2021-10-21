const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: Number,
  role: {
    type: String,
    required: true,
    enum: ["buyer", "seller", "admin"],
    default: "buyer",
  },
});

module.exports = User = model("user", userSchema);

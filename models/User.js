const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
    enum: ["buyer", "seller", "admin"],
    default: "buyer",
  },
});

module.exports = User = model("user", userSchema);

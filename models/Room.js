const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const roomSchema = new Schema({
  roomName: { type: String, required: true },
  categorie: { type: String, required: true },
  type: { type: String, required: true },
  estimation: { type: String, required: true },
  description: { type: String },
 
});

module.exports = Room = model("room", roomSchema);
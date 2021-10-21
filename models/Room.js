const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const roomSchema = new Schema({
  id_seller: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  id_buyer:{
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  roomName: { type: String, required: true },
  categorie: { type: String, required: true },
  type: { type: String, required: true },
  estimation: { type: String, required: true },
  description: { type: String },
 status: {
    type: String,
    enum: ["en attente", "accepter", "refuser"],
    default: "en attente",
  },
});

module.exports = Room = model("room", roomSchema);
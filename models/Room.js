const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const roomSchema = new Schema({
  id_seller: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
   id_buyer: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  roomName: { type: String, required: true },
  categorie: { type: String, required: true },
  estimation: { type: String, required: true },
  description: { type: String },
  images:{type: String},
  date :{type: Date},
  status: {
    type: String,
    enum: ["waiting", "accept", "refuse"],
    default: "waiting",
  },
  activated:{ type: Boolean ,
    default: false
  },
});

module.exports = Room = model("room", roomSchema);
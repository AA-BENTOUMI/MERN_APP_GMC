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
  cloudinary_id:{type: String},
  date :{type: Date},
  status: {
    type: String,
    enum: ["waiting", "accept", "refuse"],
    default: "waiting",
  },
  activated:{ type: Boolean ,
    default: false
  },
  starting: { type: Number, },
  addsum: { type: Number, },
  last: { type: String },
});

module.exports = Room = model("room", roomSchema);
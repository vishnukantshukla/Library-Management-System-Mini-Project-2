const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username:{
    type: String,
    trim: true,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },
  Email: {
    type: String,
    trim: true,
    required: true,
  },
  PhoneNumber: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});
const User = mongoose.model("User", userSchema);
module.exports = User;

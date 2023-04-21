const mongoose = require("mongoose");

const users = mongoose.Schema(
  {
    name: {
      type: String,
      requied: [true, "Enter Name"],
    },
    email: {
      type: String,
      required: [true, "Enter Email"],
      unique: true,
    },
    phone_no: {
      type: Number,
      required: false,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("Users", users);

module.exports = Users;

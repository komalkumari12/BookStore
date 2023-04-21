const mongoose = require("mongoose");

const BookBank = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
      unique: false,
    },
    published_month: {
      type: String,
      required: false,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

const BookStore = mongoose.model("BookStore", BookBank);

module.exports = BookStore;

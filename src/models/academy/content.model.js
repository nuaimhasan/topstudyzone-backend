const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      require: true,
      unique: false,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
    class: {
      type: mongoose.Types.ObjectId,
      ref: "Class",
    },
    subject: {
      type: mongoose.Types.ObjectId,
      ref: "Subject",
    },
    chapter: {
      type: mongoose.Types.ObjectId,
      ref: "Chapter",
    },
  },
  { timestamps: false }
);

const Content = mongoose.model("Content", contentSchema);

module.exports = Content;

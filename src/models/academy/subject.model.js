const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    order: {
      type: Number,
      require: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
    class: {
      type: mongoose.Types.ObjectId,
      ref: "Class",
    },
  },
  { timestamps: false }
);

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;

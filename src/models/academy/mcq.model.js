const mongoose = require("mongoose");

const academyMCQSchema = new mongoose.Schema(
  {
    name: {
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

const AcademyMCQ = mongoose.model("AcademyMCQ", academyMCQSchema);

module.exports = AcademyMCQ;

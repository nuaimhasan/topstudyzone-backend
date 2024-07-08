const mongoose = require("mongoose");

const academyMCQSchema = new mongoose.Schema(
  {
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
    question: {
      type: String,
      require: true,
    },
    points: {
      type: Array,
      require: true,
    },
    ans: {
      type: String,
      require: true,
    },
    videoLink: {
      type: String,
      require: true,
    },
    explain: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const AcademyMCQ = mongoose.model("AcademyMCQ", academyMCQSchema);

module.exports = AcademyMCQ;

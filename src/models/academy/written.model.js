const mongoose = require("mongoose");

const academyWrittenSchema = new mongoose.Schema(
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
    chapter: {
      type: mongoose.Types.ObjectId,
      ref: "Chapter",
    },
    question: {
      type: String,
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
    like: {
      type: Number,
    },
    view: {
      type: Number,
    },
  },
  { timestamps: true }
);

const AcademyWritten = mongoose.model("AcademyWritten", academyWrittenSchema);

module.exports = AcademyWritten;

const mongoose = require("mongoose");

const writtenSchema = new mongoose.Schema(
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
    subChapter: {
      type: mongoose.Types.ObjectId,
      ref: "SubChapter",
      required: false,
    },
    subSubChapter: {
      type: mongoose.Types.ObjectId,
      ref: "SubSubChapter",
      required: false,
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

const Written = mongoose.model("Written", writtenSchema);

module.exports = Written;

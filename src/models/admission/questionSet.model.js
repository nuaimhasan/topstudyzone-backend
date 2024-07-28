const mongoose = require("mongoose");

const questionSetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    year: {
      type: String,
      require: true,
    },
    university: {
      type: mongoose.Types.ObjectId,
      ref: "University",
      require: true,
    },
  },
  { timestamps: false }
);

const QuestionSet = mongoose.model("QuestionSet", questionSetSchema);

module.exports = QuestionSet;

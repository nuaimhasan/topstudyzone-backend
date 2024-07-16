const mongoose = require("mongoose");

const questionSetSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    year: {
      type: String,
      require: true,
    },
    subject: [
      {
        subejct: { type: mongoose.Types.ObjectId, ref: "AdmissionSubject" },
        mcq: [{ type: mongoose.Types.ObjectId, ref: "AdmissionMCQ" }],
      },
    ],
    university: {
      type: mongoose.Types.ObjectId,
      ref: "University",
    },
  },
  { timestamps: false }
);

const QuestionSet = mongoose.model("QuestionSet", questionSetSchema);

module.exports = QuestionSet;

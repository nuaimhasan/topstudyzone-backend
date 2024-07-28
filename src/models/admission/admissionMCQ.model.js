const mongoose = require("mongoose");

const admissionMCQSchema = new mongoose.Schema(
  {
    university: {
      type: mongoose.Types.ObjectId,
      ref: "University",
      require: true,
    },
    questionSet: {
      type: mongoose.Types.ObjectId,
      ref: "QuestionSet",
      require: true,
    },
    subjects: [
      {
        subject: {
          type: mongoose.Types.ObjectId,
          ref: "Subject",
          require: true,
        },
        mcqs: [{ type: mongoose.Types.ObjectId, ref: "MCQ", require: true }],
      },
    ],
  },
  { timestamps: false }
);

const AdmissionMCQ = mongoose.model("AdmissionMCQ", admissionMCQSchema);

module.exports = AdmissionMCQ;

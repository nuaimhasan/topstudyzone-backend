const mongoose = require("mongoose");

const admissionMCQSchema = new mongoose.Schema(
  {
    subject: {
      type: mongoose.Types.ObjectId,
      ref: "AdmissionSubject",
    },
    chapter: {
      type: mongoose.Types.ObjectId,
      ref: "AdmissionChapter",
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
    like: {
      type: Number,
    },
    view: {
      type: Number,
    },
    tags: {
      type: Array,
    },
  },
  { timestamps: true }
);

const AdmissionMCQ = mongoose.model("AdmissionMCQ", admissionMCQSchema);

module.exports = AdmissionMCQ;

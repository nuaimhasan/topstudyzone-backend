const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      require: true,
    },
    subject: {
      type: mongoose.Types.ObjectId,
      ref: "AdmissionSubject",
    },
    chapter: {
      type: mongoose.Types.ObjectId,
      ref: "AdmissionChapter",
    },
  },
  { timestamps: false }
);

const AdmissionContent = mongoose.model("AdmissionContent", contentSchema);

module.exports = AdmissionContent;

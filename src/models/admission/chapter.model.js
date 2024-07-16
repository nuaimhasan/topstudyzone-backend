const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: false,
    },
    subject: {
      type: mongoose.Types.ObjectId,
      ref: "AdmissionSubject",
    },
  },
  { timestamps: false }
);

const AdmissionChapter = mongoose.model("AdmissionChapter", chapterSchema);

module.exports = AdmissionChapter;

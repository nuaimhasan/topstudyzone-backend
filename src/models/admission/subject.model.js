const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  { timestamps: false }
);

const AdmissionSubject = mongoose.model("AdmissionSubject", subjectSchema);

module.exports = AdmissionSubject;

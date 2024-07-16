const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: false,
    },
  },
  { timestamps: false }
);

const AdmissionSubject = mongoose.model("AdmissionSubject", subjectSchema);

module.exports = AdmissionSubject;

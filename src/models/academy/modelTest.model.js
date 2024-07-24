const mongoose = require("mongoose");

const modelTestSchema = new mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "User",
    // },
    subject: {
      type: mongoose.Types.ObjectId,
      ref: "Subject",
    },
    date: {
      type: String,
      require: true,
    },
    totalQuestion: {
      type: Number,
      require: true,
    },
    totalMark: {
      type: Number,
      require: true,
    },
    negativeMark: {
      type: Number,
      require: true,
    },
    passMark: {
      type: Number,
      require: true,
    },
    examDuration: {
      type: Number,
      require: true,
    },
    result: {
      obtainMark: { type: Number },
      resultType: { type: String },
      totalNegativeMark: { type: Number },
      totalRightAns: { type: Number },
      totalWrongAns: { type: Number },
      totalNoAns: { type: Number },
    },
    mcqs: [
      {
        mcq: { type: mongoose.Types.ObjectId, ref: "MCQ" },
        rightAns: { type: String },
        selectedAns: { type: String },
      },
    ],
  },
  { timestamps: true }
);

const ModelTest = mongoose.model("ModelTest", modelTestSchema);

module.exports = ModelTest;

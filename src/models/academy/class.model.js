const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    order: {
      type: Number,
      require: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
    subjects: [{ type: mongoose.Types.ObjectId, ref: "Subject" }],
  },
  { timestamps: false }
);

const Class = mongoose.model("Class", classSchema);

module.exports = Class;

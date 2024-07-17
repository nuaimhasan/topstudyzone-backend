const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
  {
    uuid: {
      type: String,
      require: true,
      unique: true,
    },
    name: {
      type: String,
      require: true,
    },
    order: {
      type: Number,
      require: true,
    },
    fixed: {
      type: Boolean,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "AcademyCategory",
    },
  },
  { timestamps: false }
);

const Class = mongoose.model("Class", classSchema);

module.exports = Class;

const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    uuid: {
      type: String,
      require: true,
      unique: true,
    },
    name: {
      type: String,
      require: true,
      unique: true,
    },
    order: {
      type: Number,
      require: true,
    },
    fixed: {
      type: Boolean,
    },
  },
  { timestamps: false }
);

const AcademyCategory = mongoose.model("AcademyCategory", categorySchema);

module.exports = AcademyCategory;

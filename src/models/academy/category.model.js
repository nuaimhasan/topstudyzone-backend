const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    order: {
      type: Number,
      require: true,
    },
    classes: [{ type: mongoose.Types.ObjectId, ref: "Class" }],
  },
  { timestamps: false }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;

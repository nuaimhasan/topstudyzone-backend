const Category = require("../../models/academy/category.model");

exports.insert = async (req, res) => {
  const data = req?.body;
  try {
    const result = await Category.create(data);

    res.status(200).json({
      success: true,
      message: "Categories add success",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

exports.get = async (req, res) => {
  try {
    const result = await Category.find({}).populate("classes").sort("order");
    res.status(200).json({
      success: true,
      message: "Categories get success",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

exports.getSingle = async (req, res) => {
  const id = req?.params?.id;
  try {
    const result = await Category.findById(id).populate("classes");
    res.status(200).json({
      success: true,
      message: "Category get success",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

exports.update = async (req, res) => {
  const id = req?.params?.id;
  const data = req?.body;

  try {
    const isExist = await Category.findById(id);

    if (!isExist) {
      return res.status(404).json({
        success: false,
        error: "Category not found",
      });
    }

    const result = await Category.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!result) {
      return res.status(404).json({
        success: false,
        error: "Category not updated",
      });
    }

    res.status(200).json({
      success: true,
      message: "Category updated success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.destoy = async (req, res) => {
  try {
    const result = await Category.findByIdAndDelete(req?.params?.id);

    if (!result) {
      return res.status(404).json({
        success: false,
        error: "Category delete problem!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Category delete success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

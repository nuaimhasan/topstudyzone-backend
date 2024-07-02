const Class = require("../../models/academy/class.model");
const Category = require("../../models/academy/category.model");

exports.insert = async (req, res) => {
  try {
    const data = req?.body;
    const result = await Class.create(data);

    if (result?._id) {
      await Category.updateOne(
        { _id: data?.category },
        { $push: { classes: result?._id } }
      );

      res.status(200).json({
        success: true,
        message: "Class add success",
        data: result,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "something went wront!",
        data: result,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

exports.get = async (req, res) => {
  try {
    const result = await Class.find({})
      .populate("category subjects")
      .sort("order");
    res.status(200).json({
      success: true,
      message: "Classes get success",
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
    const result = await Class.findById(id).populate("category subjects");
    res.status(200).json({
      success: true,
      message: "Class get success",
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
    const isExist = await Class.findById(id);

    if (!isExist) {
      return res.status(404).json({
        success: false,
        error: "Class not found",
      });
    }

    const result = await Class.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!result) {
      return res.status(404).json({
        success: false,
        error: "Class not updated",
      });
    }

    res.status(200).json({
      success: true,
      message: "Class updated success",
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
    const { id } = req?.params;
    const clas = await Class.findById(id);

    if (!clas) {
      return res.status(400).json({
        success: false,
        error: "class not found!",
      });
    }

    const category = clas?.category;

    const result = await Class.findByIdAndDelete(id);

    if (result?._id) {
      await Category.updateOne({ _id: category }, { $pull: { classes: id } });

      res.status(200).json({
        success: true,
        message: "Class delete success",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "something went wront!",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

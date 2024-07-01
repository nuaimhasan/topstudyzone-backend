const Chapter = require("../../models/academy/chapter.model");

exports.insert = async (req, res) => {
  try {
    const data = req?.body;
    const result = await Chapter.create(data);

    res.status(200).json({
      success: true,
      message: "Chapter add success",
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
    const result = await Chapter.find({});
    res.status(200).json({
      success: true,
      message: "Chapter get success",
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
    const isExist = await Chapter.findById(id);

    if (!isExist) {
      return res.status(404).json({
        success: false,
        error: "Chapter not found",
      });
    }

    const result = await Chapter.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!result) {
      return res.status(404).json({
        success: false,
        error: "Chapter not updated",
      });
    }

    res.status(200).json({
      success: true,
      message: "Chapter updated success",
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
    const result = await Chapter.findByIdAndDelete(req?.params?.id);

    if (!result) {
      return res.status(404).json({
        success: false,
        error: "Chapter delete problem!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Chapter delete success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

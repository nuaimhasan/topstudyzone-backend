const Class = require("../../models/academy/class.model");

exports.insert = async (req, res) => {
  try {
    const data = req?.body;
    const result = await Class.create(data);

    res.status(200).json({
      success: true,
      message: "Class add success",
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
    const result = await Class.find({});
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
    const result = await Class.findByIdAndDelete(req?.params?.id);

    if (!result) {
      return res.status(404).json({
        success: false,
        error: "Class delete problem!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Class delete success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const Content = require("../../models/academy/content.model");

exports.insert = async (req, res) => {
  try {
    const data = req?.body;
    const result = await Content.create(data);

    res.status(200).json({
      success: true,
      message: "Content add success",
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
  const { chapter } = req.query;

  try {
    let query = {};
    if (chapter && chapter !== "undefined" && chapter !== "null")
      query.chapter = chapter;

    const result = await Content.find(query).populate(
      "category class subject chapter"
    );

    res.status(200).json({
      success: true,
      message: "Contents get success",
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
  const { id } = req.params;
  try {
    const result = await Content.findById(id).populate(
      "category class subject chapter"
    );
    res.status(200).json({
      success: true,
      message: "Content get success",
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
    const isExist = await Content.findById(id);

    if (!isExist) {
      return res.status(404).json({
        success: false,
        error: "Content not found",
      });
    }

    const result = await Content.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!result) {
      return res.status(404).json({
        success: false,
        error: "Content not updated",
      });
    }

    res.status(200).json({
      success: true,
      message: "Content updated success",
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
    const result = await Content.findByIdAndDelete(req?.params?.id);

    if (!result) {
      return res.status(404).json({
        success: false,
        error: "Content delete problem!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Content delete success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

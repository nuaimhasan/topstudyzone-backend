const Subject = require("../../models/academy/subject.model");
const Class = require("../../models/academy/class.model");

exports.insert = async (req, res) => {
  try {
    const data = req?.body;
    const result = await Subject.create(data);

    if (result?._id) {
      await Class.updateOne(
        { _id: data?.class },
        { $push: { subjects: result?._id } }
      );

      res.status(200).json({
        success: true,
        message: "Subject add success",
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
  const { cls } = req.query;
  try {
    let query = {};
    if (cls) query.class = cls;

    const result = await Subject.find(query)
      .populate("category class chapters")
      .sort("order");
    res.status(200).json({
      success: true,
      message: "Subjects get success",
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
    const result = await Subject.findById(id).populate(
      "category class chapters"
    );
    res.status(200).json({
      success: true,
      message: "Subject get success",
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
    const isExist = await Subject.findById(id);

    if (!isExist) {
      return res.status(404).json({
        success: false,
        error: "Subject not found",
      });
    }

    const result = await Subject.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!result) {
      return res.status(404).json({
        success: false,
        error: "Subject not updated",
      });
    }

    res.status(200).json({
      success: true,
      message: "Subject updated success",
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
    const subject = await Subject.findById(id);

    if (!subject) {
      return res.status(400).json({
        success: false,
        error: "subject not found!",
      });
    }

    const clas = subject?.class;

    const result = await Subject.findByIdAndDelete(id);

    if (result?._id) {
      await Class.updateOne({ _id: clas }, { $pull: { subjects: id } });

      res.status(200).json({
        success: true,
        message: "Subject delete success",
        data: result,
      });
    } else {
      return res.status(404).json({
        success: false,
        error: "something went wront!",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

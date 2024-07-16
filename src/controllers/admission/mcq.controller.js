const AdmissionMCQ = require("../../models/admission/mcq.model");
const { calculatePagination } = require("../../utils/calculatePagination");
const { pick } = require("../../utils/pick");

exports.insert = async (req, res) => {
  const data = req?.body;
  try {
    const result = await AdmissionMCQ.create(data);

    res.status(200).json({
      success: true,
      message: "Admission MCQ add success",
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
  const paginationOptions = pick(req.query, ["page", "limit"]);
  const { page, limit, skip } = calculatePagination(paginationOptions);
  const { subject, chapter } = req.query;
  try {
    let query = {};
    if (subject && subject !== "undefined" && subject !== "null")
      query.subject = subject;
    if (chapter && chapter !== "undefined" && chapter !== "null")
      query.chapter = chapter;

    const result = await AdmissionMCQ.find(query)
      .skip(skip)
      .limit(limit)
      .populate("category class subject chapter");

    const total = await AdmissionMCQ.countDocuments(query);
    const pages = Math.ceil(parseInt(total) / parseInt(limit));

    res.status(200).json({
      success: true,
      message: "Admission MCQ get success",
      meta: {
        total,
        pages,
        page,
        limit,
      },
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
    const result = await AdmissionMCQ.findById(id);
    res.status(200).json({
      success: true,
      message: "Admission MCQ get success",
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
    const isExist = await AdmissionMCQ.findById(id);

    if (!isExist) {
      return res.status(404).json({
        success: false,
        error: "Admission MCQ not found",
      });
    }

    const result = await AdmissionMCQ.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!result) {
      return res.status(404).json({
        success: false,
        error: "Admission MCQ not updated",
      });
    }

    res.status(200).json({
      success: true,
      message: "Admission MCQ updated success",
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
    const result = await AdmissionMCQ.findByIdAndDelete(req?.params?.id);

    if (!result) {
      return res.status(404).json({
        success: false,
        error: "Admission MCQ delete problem!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Admission MCQ delete success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

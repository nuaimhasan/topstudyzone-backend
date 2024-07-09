const AcademyMCQ = require("../../models/academy/mcq.model");
const { calculatePagination } = require("../../utils/calculatePagination");
const { pick } = require("../../utils/pick");

exports.insert = async (req, res) => {
  const data = req?.body;
  try {
    const result = await AcademyMCQ.create(data);

    res.status(200).json({
      success: true,
      message: "Academy MCQ add success",
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
  const { subject } = req.query;
  try {
    let query = {};
    if (subject && subject !== "undefined") query.subject = subject;

    const result = await AcademyMCQ.find(query)
      .skip(skip)
      .limit(limit)
      .populate("category class subject");

    const total = await AcademyMCQ.countDocuments(query);
    const pages = Math.ceil(parseInt(total) / parseInt(limit));

    res.status(200).json({
      success: true,
      message: "Academy MCQ get success",
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
    const result = await AcademyMCQ.findById(id);
    res.status(200).json({
      success: true,
      message: "Academy MCQ get success",
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
    const isExist = await AcademyMCQ.findById(id);

    if (!isExist) {
      return res.status(404).json({
        success: false,
        error: "Academy MCQ not found",
      });
    }

    const result = await AcademyMCQ.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!result) {
      return res.status(404).json({
        success: false,
        error: "Academy MCQ not updated",
      });
    }

    res.status(200).json({
      success: true,
      message: "Academy MCQ updated success",
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
    const result = await AcademyMCQ.findByIdAndDelete(req?.params?.id);

    if (!result) {
      return res.status(404).json({
        success: false,
        error: "Academy MCQ delete problem!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Academy MCQ delete success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

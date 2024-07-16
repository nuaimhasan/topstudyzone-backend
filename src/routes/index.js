const express = require("express");
const router = express.Router();

//------------------------------------------------------------------------------
// Academy Routes
//------------------------------------------------------------------------------
const categoryRoutes = require("./academy/category.routes");
const classRoutes = require("./academy/class.routes");
const subjectRoutes = require("./academy/subject.routes");
const chapterRoutes = require("./academy/chapter.routes");
const contentRoutes = require("./academy/content.routes");
const mcqRouters = require("./academy/mcq.routes");
const writtenRouters = require("./academy/written.routes");
const modelTestRouters = require("./academy/modelTest.routes");

router.use("/academy/category", categoryRoutes);
router.use("/academy/class", classRoutes);
router.use("/academy/subject", subjectRoutes);
router.use("/academy/chapter", chapterRoutes);
router.use("/academy/content", contentRoutes);
router.use("/academy/mcq", mcqRouters);
router.use("/academy/written", writtenRouters);
router.use("/academy/modelTest", modelTestRouters);

//------------------------------------------------------------------------------
// Admission Routes
//------------------------------------------------------------------------------
const admissionSubjectRoutes = require("./admission/subject.routes");
const admissionChapterRoutes = require("./admission/chapter.routes");
const admissionContentRoutes = require("./admission/content.routes");

router.use("/admission/subject", admissionSubjectRoutes);
router.use("/admission/chapter", admissionChapterRoutes);
router.use("/admission/content", admissionContentRoutes);

module.exports = router;

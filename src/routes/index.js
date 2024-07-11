const express = require("express");
const router = express.Router();
const categoryRoutes = require("./academy/category.routes");
const classRoutes = require("./academy/class.routes");
const subjectRoutes = require("./academy/subject.routes");
const chapterRoutes = require("./academy/chapter.routes");
const contentRoutes = require("./academy/content.routes");
const mcqRouters = require("./academy/mcq.routes");
const modelTestRouters = require("./academy/modelTest.routes");

//------------------------------------------------------------------------------
// Academy Routes
//------------------------------------------------------------------------------
router.use("/academy/category", categoryRoutes);
router.use("/academy/class", classRoutes);
router.use("/academy/subject", subjectRoutes);
router.use("/academy/chapter", chapterRoutes);
router.use("/academy/content", contentRoutes);
router.use("/academy/mcq", mcqRouters);
router.use("/academy/modelTest", modelTestRouters);

module.exports = router;

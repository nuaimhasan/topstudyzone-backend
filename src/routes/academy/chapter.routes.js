const express = require("express");
const router = express.Router();
const {
  get,
  insert,
  update,
  destoy,
} = require("../../controllers/academy/chapter.controller");

router.get("/all", get);
router.post("/add", insert);
router.patch("/update/:id", update);
router.delete("/delete/:id", destoy);

module.exports = router;

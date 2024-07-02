const express = require("express");
const router = express.Router();
const {
  get,
  getSingle,
  insert,
  update,
  destoy,
} = require("../../controllers/academy/content.controller");

router.get("/all", get);
router.get("/:id", getSingle);
router.post("/add", insert);
router.patch("/update/:id", update);
router.delete("/delete/:id", destoy);

module.exports = router;

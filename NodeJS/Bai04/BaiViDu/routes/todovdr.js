const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todovdc");

router.get("/", todoController.index);

router.post("/add", todoController.add);

router.post("/toggle/:id", todoController.toggle);

router.post("/delete/:id", todoController.delete);

module.exports = router;
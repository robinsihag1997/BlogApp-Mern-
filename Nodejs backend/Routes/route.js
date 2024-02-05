const express = require("express");
const router = express.Router();

// controller function imports
const { homeRoute, demoPost } = require("../controller/main.controller");

router.get("/", homeRoute);
router.post("/demoPost", demoPost);

module.exports = router;

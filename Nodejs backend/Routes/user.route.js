const express = require("express");
const router = express.Router();

// controller function imports
const { homeRoute } = require("../controller/main.controller");

router.get("/hello", homeRoute);

module.exports = router;

const {
  create,
  deletepost,
  getposts,
  updatepost,
} = require("../controller/post.controller");

const express = require("express");
const verifyToken = require("../utlies/verifyUser.js");
const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getposts", getposts);
router.delete("/deletepost/:postId/:userId", verifyToken, deletepost);
router.put("/updatepost/:postId/:userId", verifyToken, updatepost);

module.exports = router;

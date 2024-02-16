const express = require("express");
const router = express.Router();
const verifyToken = require("../utlies/verifyUser.js");
const {
  test,
  updateUser,
  deleteUser,
  signout,
  getUsers,
  getUser,
} = require("../controller/user.controller.js");

router.get("/test", test);
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", signout);
router.get("/getusers", verifyToken, getUsers);
router.get("/:userId", getUser);
module.exports = router;

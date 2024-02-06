const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");
require("dotenv").config();
const signup = async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  if (
    (!username,
    !password,
    !email,
    email === "",
    password === "",
    username === "")
  ) {
    res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }
  try {
    // password hashing
    const haseshPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      username,
      email,
      password: haseshPassword,
    });
    res.status(200).json({
      success: true,
      data: user,
      Message: "user added successfully",
    });
  } catch (error) {
    // console.error(error);
    // console.log(error.message);
    res.status(500).json({
      success: false,
      data: "internal server error",
      Message: `${error.message}`,
    });
  }
};

const signin = async (req, res) => {
  console.log("route hit");
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const validUser = await userModel.findOne({ email });
    if (!validUser) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }
    const token = jwt.sign(
      { id: validUser._id, isAdmin: validUser.isAdmin },
      process.env.JWT_SECRET
    );

    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    res.status(500).json({
      success: false,
      data: "internal server error",
      Message: `${error.message}`,
    });
  }
};

module.exports = {
  signup,
  signin,
};

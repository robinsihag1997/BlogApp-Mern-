const bcrypt = require("bcrypt");
const userModel = require("../model/user.model");

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
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
    // password hashing
    const haseshPassword = await bcrypt.hash(password, 10);

    // creating user object into database

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
      Message: error.message,
    });
  }
};

module.exports = {
  signup,
};

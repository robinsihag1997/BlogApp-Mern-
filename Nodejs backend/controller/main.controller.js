// const demoModel = require("../model/demo.model");

const homeRoute = (req, res) => {
  res.send("<h1>this is home page</h1>");
};
const demoPost = async (req, res) => {
  // extract data from body
  const { name, email } = req.body;

  // dbcall;
  try {
    //send response with success message
    const response = await demoModel.create({ name: name, email: email });
    res.status(200).json({
      success: true,
      data: response,
      Message: "Data created successfully",
    });
  } catch (error) {
    //send response with error message
    console.error(error);
    console.log(error.message);
    res.status(500).json({
      success: false,
      data: "internal server error",
      Message: error.message,
    });
  }
};

module.exports = {
  homeRoute,
  demoPost,
};

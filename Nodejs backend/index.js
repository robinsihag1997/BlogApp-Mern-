//Modules import
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//PORT
require("dotenv").config();
const PORT = process.env.PORT || 8000;

//server listing
app.listen(PORT, () => {
  try {
    console.log(`listening on PORT ${PORT}`);
  } catch (error) {
    console.log(`Failed to listen on PORT ${PORT} message: ${error.message}`);
  }
});

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//middleware routes
const userRoutes = require("./Routes/user.route");
const authRoutes = require("./Routes/auth.route");
const postRoutes = require("./Routes/post.route");
const commentRoutes = require("./Routes/comment.route");

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

//DBconnection
// put your database name below
const datbase_name = "MernBlog";
const dbconnection = require("./config/database");
dbconnection(datbase_name);

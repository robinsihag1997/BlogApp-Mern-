//Modules import
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//middleware routes
const route = require("./Routes/route");
app.use(route);

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

//DBconnection
// put your database name below
const datbase_name = "MernBlog";
const dbconnection = require("./config/database");
dbconnection(datbase_name);

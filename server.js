//npm i nodemon express socket.io dotenv mongoose
const express = require("express");
const mongoose = require("mongoose");
const cookie = require("cookie-parser");
const cors = require("cors");
const path = require("path");

require("dotenv").config({ path: "./config/config.env" });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//custom middlewares
app.use(express.static("public"));
app.use(cookie());
app.use(cors());

//imported routes
const volunteerRoutes = require("./routes/volunteer");
const singleRoutes = require("./routes/single_routes");
const reported_cases = require("./routes/reported_cases");
const adminRoutes = require("./routes/admin");

//auth
const { isAdmin } = require("./middlewares/auth");

//routes middleware
app.use("/", singleRoutes);
app.use("/volunteer", volunteerRoutes);
app.use("/admin", adminRoutes);
app.use("/report", reported_cases);

const PORT = process.env.PORT || 8000;

mongoose.connect(
  process.env.DBURI,
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  (error) => {
    if (error)
      console.log(
        `There was an ${error} connecting shuush to the DB and server on port ${PORT}`
      );
    else
      app.listen(PORT, () => {
        console.log(`shuush database and server connected on port ${PORT}`);
      });
  }
);

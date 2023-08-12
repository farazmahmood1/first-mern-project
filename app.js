const express = require("express");
const app = express();



// importing the routes
const studentRoute = require("./api/route/student");
const facultyRoute = require("./api/route/faculty");

// 
const bodyParser = require('body-parser')


// importing mongodb
const mongoose = require("mongoose");
// password connection  database ==> connect ===> drivers
mongoose.connect(
  "mongodb+srv://faraz:11farazmahmood11@cluster0.lpdtumq.mongodb.net/?retryWrites=true&w=majority"
);
// checking the connection of the mongodb
mongoose.connection.on("error", (err) => {
  console.log("connection failed");
});
mongoose.connection.on("connected", (connected) => {
  console.log("succesfull");
});


// bodyparsing usage
app.use(bodyParser.urlencoded({extended:'false'}));
app.use(bodyParser.json());


//assigning the name for the apis
app.use("/student", studentRoute);
app.use("/faculty", facultyRoute);

// setting the route of the invalid path
app.use((req, res, next) => {
  res.status(400).json({
    error: "invalid route",
  });
});

// setting the response of the app

// app.use((req, res, next) => {
//   res.status(200).json({
//     message: "app is running",
//   });
// });

module.exports = app;

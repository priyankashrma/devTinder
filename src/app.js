const express = require("express");

const app = express();

const connectDB = require("./config/database");
const User = require("./models/user.js");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Rahul",
    lastName: "Sharma",
    emailId: "sharma00praful@gmail.com",
    password: "praful@123",
  });
  try {
    await user.save();
    res.send("User successfully added");
  } catch (err) {
    res.status(400).send("Error saving the User: ", err);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection estabilished");
    app.listen(7777, () => {
      console.log("server is successfully running on port 7777");
    });
  })
  .catch((err) => {
    console.error("DB cannot be connected", err);
  });

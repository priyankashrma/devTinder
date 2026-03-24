const express = require("express");

const app = express();

app.use("/user", (req, res, next) => {
  if (req.query.token) {
    const token = req.query.token;
    if (token === "abc") {
      next();
    } else {
      res.status(401).send("Unauthorized request");
    }
  } else {
    res.status(401).send("Unauthorized request");
  }
});

app.use("/user/getAllData", (req, res, next) => {
  res.send("Get All Data");
});

app.get("/user/postAllData", (req, res, next) => {
  res.send("Post All Data");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong");
  }
});

app.use("/test", (req, res, next) => {
  res.send("Just Testing");
});

app.listen(7777, () => {
  console.log("server is successfully running on port 3000");
});

const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("Hello hello hello");
});

app.use("/test", (req, res) => {
  res.send("Hello hello server");
});

app.listen(3000, () => {
  console.log("server is successfully running on port 3000");
});

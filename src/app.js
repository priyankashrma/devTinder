const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("Hello hello hello");
});

app.get("/test", (req, res) => {
  res.send("Hello hello server");
});

app.post("/test/:userId", (req, res) => {
  console.log(req.params);
  res.send({ id: req.params, firstname: "Priya", lastname: "sharma" });
});

app.post("/test", (req, res) => {
  res.send("Data saved to database");
});

app.delete("/test", (req, res) => {
  res.send("Data deleted successfully");
});

app.use("/", (req, res) => {
  res.send("General hello");
});

app.listen(3000, () => {
  console.log("server is successfully running on port 3000");
});

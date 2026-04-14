const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://namastedev:rL670wIpmzkk1pqv@namastenode.jw7gae9.mongodb.net/devTinder",
  );
};

module.exports = connectDB;

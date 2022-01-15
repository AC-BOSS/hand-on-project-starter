const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.err("Error connecting to database", err));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(process.env.PORT, () => {
  console.log(`Backend server started on port ${process.env.PORT}`);
});

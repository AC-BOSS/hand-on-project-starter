const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.error("Error connecting to database", err));

// Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/auth", require("./routes/auth"));

app.listen(process.env.PORT, () => {
    console.log(`Backend server started on port ${process.env.PORT}`);
});

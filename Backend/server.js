require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db.js");

const noteRoutes = require("./routes/noteRoutes.js");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
  res.send("Notes API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const book = require("./routes/book.routes");

const app = express();
const port = process.env.PORT || 5000;

require("dotenv").config();
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ty5ry.mongodb.net/books?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connect Database sukses!");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/books", book);

app.listen(port, () => {
  console.log(`Server jalan di PORT: ${port}`);
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + "/index.html"));
// });
app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

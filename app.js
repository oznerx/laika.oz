require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes");
const mongoose = require("mongoose");

const PORT = 8080;

const main = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  app.set("view engine", "ejs");

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(express.static("public"));
  app.use("/", router);

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
};

main();

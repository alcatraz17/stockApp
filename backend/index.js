const express = require("express");
// const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");
const Stock = require("./src/model/stock");
const cors = require("cors");
const routes = require("./src/routes");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const { MY_URI, PORT } = process.env;

mongoose.connect(MY_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Successfully connected to database");
});

app.use("/search", routes);

app.get(`/`, (req, res) => {
  res.status(200).send("Server up and running...");
});


// app.get("/", (req, res) => {
//   res.status(200).send("Connected to DB");
// });

// app.get("/details", async (req, res) => {
//     const { name = "" } = req.query;
//     const data = await Stock.find({ "name" : {$regex: `${name}`, $options: "i"}}).lean();
//     res.status(200).send(data);
// });



app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

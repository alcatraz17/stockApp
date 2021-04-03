const express = require("express");
const routes = express.Router();

const search = require("./routes/search");

routes.get("/", search);

module.exports = routes;

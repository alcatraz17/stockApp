const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  name: String,
  symbol: String,
  marketCap: Number,
  currentPrice: Number,
});

const Stock = mongoose.model("Stock", stockSchema, "details");

module.exports = Stock;

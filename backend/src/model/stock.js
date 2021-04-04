const mongoose = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const stockSchema = new mongoose.Schema({
  name: String,
  symbol: String,
  marketCap: Number,
  currentPrice: Number,
});

stockSchema.plugin(aggregatePaginate);

const Stock = mongoose.model("Stock", stockSchema, "details");

module.exports = Stock;

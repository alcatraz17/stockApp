const Stock = require("../model/stock");

const search = async (req, res) => {
  const { name = "" } = req.query;
  const data = await Stock.find({
    name: { $regex: `${name}`, $options: "i" },
  }).lean();
  res.status(200).send(data);
};

module.exports = search;

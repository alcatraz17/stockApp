const Stock = require("../model/stock");

const search = async (req, res) => {
  const { name = "", page, limit } = req.query;
  const options = {
    page: page || 1,
    limit: limit || 10,
  };
  const query = [
    {
      $match: {
        name: { $regex: `${name}`, $options: "i" },
      },
    },
  ];

  const aggregate = Stock.aggregate(query);
  const data = await Stock.aggregatePaginate(aggregate, options);
  console.log(data);
  res.status(200).send(data);
};

module.exports = search;

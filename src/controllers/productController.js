const productModel = require("../models/productModel");

exports.createProduct = async (req, res, next) => {
  try {
    const { name, price, description, createdAt } = req.body;

    const productData = {
      name,
      price,
      description,
      createdAt,
    };

    const product = await productModel.create(productData);

    res.status(201).json({ status: "success", data: product });
  } catch (error) {
    res.status(400).json({ status: "fail", data: error.message });
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const query = {};
    const projection = "name price";
    const data = await productModel.find(query).select(projection).exec();

    res.status(200).json({ status: "success", data: data });
  } catch (error) {
    res.status(400).json({ status: "fail", data: error.message });
  }
};

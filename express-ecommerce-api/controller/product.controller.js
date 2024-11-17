const Product = require("../model/Product");

const createProduct = async (req, res) => {
  await Product.create({
    name: req.body.name,
    image: req.file.filename,
    price: req.body.price,
    description: req.body.description,
  });
  res.json({
    message: "Product created succesfully.",
  });
};

const getProducts = async (req, res) => {
  console.log(req.queyr.page);
  // page = 1, limit= 5 => skip(0),
  // page =2, skiep(5) => 2-1 * 5 = 5
  // page = 3, skiep(10) 3 - 1 * 5 = 10
  // page  4 , skeip (15), 4 -1 * 5 = 15
  const { page, limit } = req.query;
  const products = await Product.find()
    .skip((page - 1) * limit)
    .limit(limit);
  res.json({
    data: products,
  });
};

const deleteProduct = async (req, res) => {
  await Product.deleteOne({ _id: req.params.id });
  res.json({
    message: "Product deleted succesfully.",
  });
};

const updateProduct = async (req, res) => {
  await Product.updateOne({ _id: req.params.id }, req.body);
  res.json({
    message: "Product updated succesfully.",
  });
};

module.exports = {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
};
// localhost:3000/api/products

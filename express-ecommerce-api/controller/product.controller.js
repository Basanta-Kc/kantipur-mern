const Order = require("../model/Order");
const Product = require("../model/Product");

const createProduct = async (req, res) => {
  await Product.create({
    name: req.body.name,
    image: req?.file?.filename,
    price: req.body.price,
    description: req.body.description,
    user: req.authUser.id,
    featured: req.body.featured,
  });
  res.json({
    message: "Product created succesfully.",
  });
};

const getProducts = async (req, res) => {
  // page = 1, limit= 5 => skip(0),
  // page =2, skiep(5) => 2-1 * 5 = 5
  // page = 3, skiep(10) 3 - 1 * 5 = 10
  // page  4 , skeip (15), 4 -1 * 5 = 15

  const { page, limit, order, search } = req.query;
  const sort = {};
  if (order) {
    sort.price = order;
  }

  const filter = {};
  if (search) {
    // like %thisrht$
    filter.name = new RegExp(search);
  }

  const products = await Product.find(filter)
    .sort(sort)
    .skip((page - 1) * limit)
    .limit(limit);
  const total = await Product.countDocuments();
  res.json({
    data: products,
    total,
  });
};

const getFeaturedProducts = async (req, res) => {
  const featuredProducts = await Product.find({ featured: true }).limit(4);
  res.json({
    data: featuredProducts,
  });
};

const getLatestProducts = async (req, res) => {
  const latestProducts = await Product.find()
    .sort({ createdAt: "desc" })
    .limit(4);
  res.json({
    data: latestProducts,
  });
};

const deleteProduct = async (req, res) => {
  await Product.deleteOne({ _id: req.params.id });
  res.json({
    message: "Product deleted succesfully.",
  });
};

const updateProduct = async (req, res) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
    featured: req.body.featured,
  };

  if (req?.file?.filename) {
    product.image = req.file.filename;
  }
  await Product.updateOne({ _id: req.params.id }, product);
  res.json({
    message: "Product updated succesfully.",
  });
};

const getProduct = async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  res.json({
    data: product,
  });
};

const createOrder = async (req, res) => {
  let total = 0;
  // req.body.products = [{id, quantity}, {id quanity}]
  for (let { _id, quantity } of req.body.products) {
    const product = await Product.findById(_id);
    total += product.price * quantity;
  }

  await Order.create({
    user: req.authUser.id,
    products: req.body.products,
    total,
  });
};

module.exports = {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  getLatestProducts,
  getFeaturedProducts,
  getProduct,
  createOrder
};
// localhost:3000/api/products

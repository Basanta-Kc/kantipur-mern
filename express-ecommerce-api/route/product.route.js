const express = require("express");
const multer = require("multer");
const {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  getLatestProducts,
  getFeaturedProducts,
  getProduct,
  createOrder,
  getOrders,
} = require("../controller/product.controller");
const { protect } = require("../middleware/auth.middleware");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "." + file.originalname.split(".").at(-1));
  },
});

const upload = multer({ storage: storage });

router.post("/", protect, upload.single("image"), createProduct);
router.get("/", getProducts);
router.get("/latest", getLatestProducts);
router.get("/featured", getFeaturedProducts);
router.post("/order", protect, createOrder);
router.get("/orders", protect, getOrders);
router.get("/:id", getProduct);
router.delete("/:id", protect, deleteProduct);
router.patch("/:id", protect, upload.single("image"), updateProduct);

module.exports = router;

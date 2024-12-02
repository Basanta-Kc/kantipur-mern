const express = require("express");
const multer = require("multer");
const {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  getLatestProducts,
  getFeaturedProducts,
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
router.delete("/:id", protect, deleteProduct);
router.patch("/:id", protect, updateProduct);

module.exports = router;

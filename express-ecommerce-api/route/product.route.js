const express = require("express");
const multer = require("multer");
const {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
} = require("../controller/product.controller");
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

router.post("/", upload.single("image"), createProduct);
router.get("/", getProducts);
router.delete("/:id", deleteProduct);
router.patch("/:id", updateProduct);
module.exports = router;

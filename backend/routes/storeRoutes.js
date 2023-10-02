const express = require("express");
const {
  fetchAllProducts,
  createProduct,
  fetchProductsByCategory,
  getSingleItem,
  deleteProduct,
  updateProduct,
  createOrder,
  createPayment,
  getSingleOrder,
  getOrders,
  getPayments,
} = require("../controllers/storeControllers");

const router = express.Router();

const { isAdmin, isAuthenticated } = require("../middlewares/auth");

router.get("/products", fetchAllProducts);
router.post("/products",isAuthenticated, createProduct);
router.get("/products/:category", fetchProductsByCategory);
router.put("/products/:pid",isAdmin, updateProduct);
router.delete("/products/:pid",isAdmin, deleteProduct);
router.get("/product/:pid", getSingleItem);
router.post("/orders", createOrder);
router.get("/orders", getOrders);
router.get("/order/:id", getSingleOrder);
router.post("/payment", createPayment);
router.get("/payments", getPayments);

module.exports = router;

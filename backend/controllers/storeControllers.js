const Product = require("../models/ProductModel");
const StorePayment = require("../models/StorePaymentModel");
const StoreOrder = require("../models/Store_OrderModel");

const fetchAllProducts = (req, res) => {
  Product.find({}, (err, docs) => {
    if (!err) {
      res.status(200).json({ products: docs });
    } else {
      res.status(500).json({ error: err });
      throw err;
    }
  });
};

const fetchProductsByCategory = (req, res) => {
  Product.find({ category: req.params.category }, (err, docs) => {
    if (!err) {
      res.status(200).json({ products: docs });
    } else {
      res.status(500).json({ error: err });
      throw err;
    }
  });
};

const createProduct = (req, res) => {
  console.log(req.body);

  if((req.body.name).includes('<script>') || (req.body.name).includes('</script>')){
    req.body.name = ((req.body.name).replace("<script>", ""))
    req.body.name = ((req.body.name).replace("</script>", ""))
  }
  if((req.body.category).includes('<script>') || (req.body.category).includes('</script>')){
    req.body.category = ((req.body.category).replace("<script>", ""))
    req.body.category = ((req.body.category).replace("</script>", ""))
  }
  if((req.body.price).includes('<script>') || (req.body.price).includes('</script>')){
    req.body.price = ((req.body.price).replace("<script>", ""))
    req.body.price = ((req.body.price).replace("</script>", ""))
  }
  if((req.body.smallDes).includes('<script>') || (req.body.smallDes).includes('</script>')){
    req.body.smallDes = ((req.body.smallDes).replace("<script>", ""))
    req.body.smallDes = ((req.body.smallDes).replace("</script>", ""))
  }
  if((req.body.longDes).includes('<script>') || (req.body.longDes).includes('</script>')){
    req.body.longDes = ((req.body.longDes).replace("<script>", ""))
    req.body.longDes = ((req.body.longDes).replace("</script>", ""))
  }

  Product.create(req.body, (err, data) => {
    if (err) res.status(500).json({ error: err });
    res.status(201).json(data);
  });
};

const deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.pid }, (err) => {
    if (err) res.status(500).json({ error: err });

    res.status(204).json({ status: "Product deleted!" });
  });
};

const updateProduct = async (req, res) => {
  const pid = req.params.pid;

  try {
    let product = await Product.findById(pid);

    if (!product) {
      return res.status(404).json({ updated: "Product not found" });
    }

    product = await Product.findByIdAndUpdate(pid, req.body);
    res.status(201).json({ updated: "Product updated successfully" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getSingleItem = (req, res) => {
  console.log(req.params.pid);
  Product.findById(req.params.pid, (err, data) => {
    if (err) return res.status(401).json({ product: "not found" });

    res.status(200).json({ product: data });
  });
};

const createOrder = (req, res) => {
  StoreOrder.create(req.body, (err, data) => {
    if (err) res.status(500).json({ error: err });
    res.status(201).json(data);
  });
};

const getOrders = (req, res) => {
  StoreOrder.find({}, (err, docs) => {
    if (!err) {
      res.status(200).json({ orders: docs });
    } else {
      res.status(500).json({ error: err });
      throw err;
    }
  });
};

const getSingleOrder = (req, res) => {
  console.log(req.params.id);
  StoreOrder.findById(req.params.id, (err, data) => {
    if (err) return res.status(401).json({ product: "not found" });

    res.status(200).json({ order: data });
  });
};

const createPayment = (req, res) => {
  StorePayment.create(req.body, (err, data) => {
    if (err) res.status(500).json({ error: err });
    res.status(201).json(data);
  });
};

const getPayments = (req, res) => {
  StorePayment.find({}, (err, docs) => {
    if (!err) {
      res.status(200).json({ payments: docs });
    } else {
      res.status(500).json({ error: err });
      throw err;
    }
  });
};

module.exports = {
  fetchAllProducts,
  createProduct,
  fetchProductsByCategory,
  deleteProduct,
  getSingleItem,
  updateProduct,
  createOrder,
  createPayment,
  getSingleOrder,
  getOrders,
  getPayments,
};

const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    address1: {
      type: String,
      required: true,
    },

    address2: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    zipCode: {
      type: String,
      required: true,
    },

    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "StoreProduct",
    },

    quantity: {
      type: String,
    },

    total: {
      type: String,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "AppUser",
    },
  },
  {
    timestamps: true,
  }
);

const StoreOrder = mongoose.model("StoreOrder", OrderSchema);

module.exports = StoreOrder;

const mongoose = require("mongoose");

const StorePaymentSchema = new mongoose.Schema(
  {
    paymentType: {
      type: String,
    },

    amount: {
      type: String,
      required: true,
    },

    paid: {
      type: Boolean,
      required: true,
    },

    paidBy: {
      type: String,
    },

    paypalUserName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const StorePayment = mongoose.model("StorePayment", StorePaymentSchema);

module.exports = StorePayment;

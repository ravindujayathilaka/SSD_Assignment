const mongoose = require("mongoose");

const AppUserSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

const AppUser = mongoose.model("AppUser", AppUserSchema);

module.exports = AppUser;

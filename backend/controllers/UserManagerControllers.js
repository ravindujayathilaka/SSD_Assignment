const AppUser = require("../models/UserModel");

const registerUser = (req, res) => {
  let { full_name, email, password } = req.body;

  AppUser.create({ full_name, email, password }, (err, data) => {
    if (err) res.status(500).json({ error: err });
    res.status(201).json(data);
  });
};

const loginUser = (req, res) => {
  console.log(req.body);

  if (
    !req.body.email ||
    !req.body.password ||
    req.body.password === null ||
    req.body.email === null
  ) {
    res.status(401).json({ error: "Email or Password doesn't match" });
  }

  AppUser.findOne({ email: req.body.email }, function (err, doc) {
    if (err) {
      res.status(401).json({ error: "Email or Password doesn't match" });
    } else {
      if (req.body.password === doc.password) {
        req.session.user = doc;
        res.status(200).json(doc);
      } else {
        res.status(401).json({ error: "Password doesn't match" });
      }
    }
  });
};

const currentUser = (req, res) => {
  console.log(req.session);
  if (req.session.user) {
    res.status(200).json(req.session.user);
  } else {
    res.status(401).json({ error: "User not found" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};

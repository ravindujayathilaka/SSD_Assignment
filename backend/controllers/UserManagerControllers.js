const AppUser = require("../models/UserModel");
const crypto = require('crypto');

const registerUser = (req, res) => {
  let { full_name, email, password } = req.body;

  //In here for the password encryption used the password hashing using SHA-256
  const hashPassword = (password) => {
    return crypto.createHash('sha256').update(password).digest('hex')
  }
  password = hashPassword('secret')

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

      let password = req.body.password

      //If the password is in the parameter it will be converted into a hash and compare the both hash of the input password and the password in the database. This way the users password will never reveal to the others.
      const hashPassword = (password) => {
        return crypto.createHash('sha256').update(password).digest('hex')
      }
      password = hashPassword('secret')

      if (password === doc.password) {

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

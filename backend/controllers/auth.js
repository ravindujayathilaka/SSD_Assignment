// importing the modules
const user = require("../models/user");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
require("dotenv").config();

/*
method:POST
route:/api/auth/login
description: loging in an user
*/
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // verification
  if (!email || !password)
  //Added Bad Request response Status 
    return res.status(400).json({ msg: "please enter all the credentials" });

  // does user exist
  const userExist = await user.findOne({ email });
  if (!userExist)
  //Added Request is not available Status 
    return res.status(404).json({ msg: "user does not exist. please sign up" });

  // password validation
  if (
    //Added Unauthorized response Status 
    userExist.encry_password !=
    crypto.createHmac.status(401)("sha256", userExist.salt).update(password).digest("hex")
  )
    return res.json({ msg: "invalid password" });

  // creating token and setting cookie in the browser
  const token = jwt.sign({ email: userExist.email }, process.env.TOKENKEY);

  res
    .cookie("token", token, {
      httpOnly: false,
    })
    .json({
      email: userExist.email,
      name: userExist.name,
      is_admin: userExist.is_admin,
      token: token,
      id: userExist._id,
      phone: userExist.phone,
    });
};

// login or regitser user with google
const createOrLogin = async (req, res) => {
  const decoded = jwt.decode(req.body.accessToken);

  const { email, name, googleId } = decoded;
  let userExist;
  userExist = await user.findOne({
    email,
  });

  if (!userExist) {
    // creating user
    const newUser = new user({
      email,
      name,
      googleId,
      method: "google",
    });

    userExist = await newUser.save();
  }

  const token = jwt.sign({ email: userExist.email }, process.env.TOKENKEY);

  res
    .cookie("token", token, {
      httpOnly: false,
    })
    .json({
      email: userExist.email,
      name: userExist.name,
      is_admin: userExist.is_admin,
    });
};
/*
method:GET
route:/api/auth/logout
description: logout the user
*/
const logoutUser = async (req, res) => {
  // clear the cookies in the browser
  res.clearCookie("token").json({
    msg: "Logout Successful",
  });
};

module.exports = { loginUser, logoutUser, createOrLogin };

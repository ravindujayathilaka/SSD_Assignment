import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [captcha, setCaptcha] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const onRegister = async () => {
    if (!captcha) {
      alert("Please verify that you are not a robot!");
      return;
    }

    const user = {
      name,
      email,
      password,
      phone,
      is_admin: false,
      captcha: captchaValue,
    };

    if (
      user.name.length <= 0 ||
      user.email.length <= 0 ||
      user.password.length <= 0
    ) {
      setError("All the fields are required to create an account");
      return;
    }

    var re = /\S+@\S+\.\S+/;

    if (re.test(user.email)) {
      const { res, status } = await axios.post(
        "http://localhost:8000/api/user",
        user
      );

      if (status === 200) {
        navigate("/login");
      }
    } else {
      setError("Please enter a valid email");
    }
  };

  const onChange = (e) => {
    setCaptchaValue(e);
    setCaptcha(true);
  };

  return (
    <div className="container min-vw-100 max-vw-100 vw-100 vh-100 min-vh-100">
      <div className="row  w-100 h-100 d-flex align-items-center justify-content-center">
        <div className="col  w-100 h-100 d-flex align-items-center justify-content-center">
          <form className="jumbotron">
            {error && (
              <h5 className="text-center text-danger form-text"> {error} </h5>
            )}

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Full Name
              </label>
              <input
                type="email"
                className="form-control"
                style={{ width: "600px" }}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                style={{ width: "600px" }}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                style={{ width: "600px" }}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <small id="emailHelp" className="form-text">
                Your password will be encrypted automatically
              </small>
            </div>

            <div className="mb-3">
              <label for="exampleInputPhone1" className="form-label">
                Phone Number
              </label>
              <input
                type="phone"
                className="form-control"
                style={{ width: "600px" }}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>

            <ReCAPTCHA
              sitekey="6LdLhW4oAAAAANPKYIiuKQxgWfWvCXr1vRdLeZr9"
              onChange={onChange}
              onSuc
            />

            <button
              type="button"
              className="btn btn-primary btn-block w-100 mt-4"
              style={{ backgroundColor: "#12af39" }}
              onClick={onRegister}
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

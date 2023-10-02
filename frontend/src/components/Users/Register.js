import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onRegister = async () => {
    const user = {
      full_name: name,
      email,
      password,
    };

    if (
      user.full_name.length <= 0 ||
      user.email.length <= 0 ||
      user.password.length <= 0
    ) {
      setError("All the fields are required to create an account");
      return;
    }

    var re = /\S+@\S+\.\S+/;

    if (re.test(user.email)) {
      const { res, status } = await axios.post(
        "http://localhost:8000/api/users/sign-up",
        user
      );

      if (status === 201) {
        navigate("/login");
      }
    } else {
      setError("Please enter a valid email");
    }
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

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [error, setError] = useState(null);
  const [waiting, setWaiting] = useState(false);

  const navigate = useNavigate();

  const onLogin = async (e) => {
    setWaiting(!waiting);
    e.preventDefault();

    const user = {
      email,
      password,
    };

    await axios
      .post("http://localhost:8000/api/auth/login", user, {
        withCredentials: true,
      })
      .then((res) => {
        setWaiting(!waiting);
        navigate("/store/store-admin-products");
        return;
      })
      .catch((error) => {
        setError(
          "Email or password doesn't match! Please check them and try again"
        );
        setWaiting(!waiting);
        return;
      });

    setWaiting(false);
  };

  return (
    <div className="container min-vw-100 max-vw-100 vw-100 vh-100 min-vh-100">
      <div className="row  w-100 h-100 d-flex align-items-center justify-content-center">
        <div className="col  w-100 h-100 d-flex align-items-center justify-content-center">
          <form className="jumbotron">
            {error && (
              <p className="text-center text-danger form-text"> {error} </p>
            )}

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                style={{ width: "600px" }}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                style={{ width: "600px" }}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <button
              type="button"
              className="btn btn-primary btn-block w-100 mt-4"
              style={{ backgroundColor: "#12af39" }}
              onClick={onLogin}
            >
              {!waiting ? "Login" : "Logging in"}
            </button>
          </form>
        </div>
        <div className="col text-center">
          <h3> Haven't got an account yet? </h3>
          <p> Click on the below button to register! </p>

          <Link to="/sign-up">
            <button
              type="button"
              className="btn btn-primary"
              style={{ backgroundColor: "#12af39" }}
            >
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

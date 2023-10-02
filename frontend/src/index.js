import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.render(
  <GoogleOAuthProvider clientId="290324642224-onsseds16j84l5ojhomquln91p9n0h36.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>,
  document.getElementById("root")
);

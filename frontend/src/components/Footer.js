import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div style={{ backgroundColor: "#12af39" }}>
      <footer className="page-footer font-small  teal py-4 text-white">
        <div className="container-fluid text-center text-md-left">
          <div className="row d-flex py-4 justify-content-around">
            <div className="col-md-3 mt-md-0 mt-3">
              <h5 className="text-uppercase font-weight-bold">Navigation</h5>
              Home
              <br />
              Services
              <br />
              Event & Contact Support
              <br />
              Contact
              <br />
              Help
              <br />
            </div>

            <div className="col-md-3 mt-md-0 mt-3">
              <h5 className="text-uppercase font-weight-bold">Navigation</h5>
              Home
              <br />
              Services
              <br />
              Event & Contact Support
              <br />
              Contact
              <br />
              Help
              <br />
            </div>

            <div className="col-md-5 mb-md-0 mb-3 text-start">
              <h5 className="text-uppercase font-weight-bold">About</h5>
              <small>
                Welcome to AgroTech LLC, your number one source for all things
                agricultural. We're dedicated to providing you the best of
                agricultural product, with a focus on dependability. customer
                service, and farmer support. We're working to turn our passion
                for agricultural products into a booming online store. We hope
                you enjoy our products as much as we enjoy offering them to you.
              </small>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import sprout from "./sprout.png";

function Header() {
  return (
    <div>
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <header className="site-navbar" role="banner">
        <div style={{ backgroundColor: "#12af39" }} className="px-3">
          <div className="align-items-center justify-content-between d-flex">
            <div className="">
              <h1 className="mb-0 site-logo">
                <a href="index.html" className="text-white mb-0">
                  Agrotec
                </a>
              </h1>
            </div>
            <div className="d-none d-xl-block  ">
              <nav
                className="site-navigation position-relative text-right"
                role="navigation"
              >
                <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li>
                    <a href="index.html">
                      <span>Home</span>
                    </a>
                  </li>
                  <li className="has-children">
                    <a href="about.html">
                      <span>
                        All Services <i class="fa-solid fa-caret-down mx-2"></i>
                      </span>{" "}
                    </a>
                    <ul className="dropdown arrow-top">
                      <li>
                        <Link to="/store">
                          <a>Store</a>
                        </Link>
                      </li>
                      <li>
                        <a href="/Ads/company">For Companies</a>
                      </li>
                      <li className="has-children">
                        <Link to="/">
                          Services
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/login">
                      <span>Login</span>
                    </Link>
                  </li>
                  <li>
                    <a href="about.html">
                      <span>About</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      <span>Blog</span>
                    </a>
                  </li>
                  <li>
                    <a href="contact.html">
                      <span>Contact</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div
              className="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
              style={{ position: "relative", top: "3px" }}
            >
              <a
                href="#"
                className="site-menu-toggle js-menu-toggle text-white"
              >
                <span className="icon-menu h3"></span>
              </a>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Event & Contact Support
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Help
            </Link>
          </li>
        </ul>
      </div>
    </nav>


    
  );
 
}

export default Header;
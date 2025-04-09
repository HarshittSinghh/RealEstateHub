import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLogin = () => {
    window.location.href = "/home";
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/" style={{ fontWeight: "bold", fontSize: "22px" }}>
            RealEstateHub
          </a>
          <div className="ms-auto">
            <Link
              to="/login"
              className="btn btn-light"
              style={{ color: "#0d6efd", fontWeight: "500", padding: "6px 16px" }}
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

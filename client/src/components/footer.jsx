import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-3">
            <h5>Who We Are</h5>
            <p style={{ fontSize: "14px" }}>
              We’re RealEstateHub — your friendly neighborhood real estate team. 
              From first apartments to forever homes, we're here to help you feel good about where you live.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Explore</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Home</a></li>
              <li><a href="#" className="text-light">Find a Property</a></li>
              <li><a href="#" className="text-light">Our Journey</a></li>
              <li><a href="#" className="text-light">Connect With Us</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Get in Touch</h5>
            <p style={{ fontSize: "14px" }}>
               123 Dream Avenue, Hometown, USA <br />
               +1 (800) 123-4567 <br />
               hello@realestatehub.com
            </p>
          </div>
        </div>

        <hr className="bg-light" />
        <div className="text-center">
          <p style={{ fontSize: "13px", marginBottom: "0" }}>
            &copy; 2024 RealEstateHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

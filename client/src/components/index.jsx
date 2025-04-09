import React from "react";

const IndexPage = () => {
  return (
    <>
      <div
        id="heroCarousel"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://images.pexels.com/photos/29247927/pexels-photo-29247927/free-photo-of-modern-dubai-residential-complex-with-pool.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              class="d-block w-100 carousel-img"
              alt="Real Estate"
            />
            <div class="carousel-caption">
              <h1 class="display-4 fw-bold text-white">Find Your Dream Home</h1>
              <p class="lead text-white">
                Explore a wide range of premium properties tailored to your
                needs.
              </p>
              <a
                href="#properties"
                class="btn btn-light text-primary px-4 py-2 fw-bold"
              >
                Browse Properties
              </a>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              class="d-block w-100 carousel-img"
              alt="Apartment"
            />
            <div class="carousel-caption">
              <h1 class="display-4 fw-bold text-white">Luxury Apartments</h1>
              <p class="lead text-white">
                Discover upscale apartments with modern amenities.
              </p>
              <a
                href="#properties"
                class="btn btn-light text-primary px-4 py-2 fw-bold"
              >
                View Listings
              </a>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              class="d-block w-100 carousel-img"
              alt="Villa"
            />
            <div class="carousel-caption">
              <h1 class="display-4 fw-bold text-white">Elegant Villas</h1>
              <p class="lead text-white">
                Experience luxury living in beautiful villas.
              </p>
              <a
                href="#properties"
                class="btn btn-light text-primary px-4 py-2 fw-bold"
              >
                Explore Now
              </a>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <section id="about" class="py-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h2>About Us</h2>
              <p>
                At RealEstateHub, we aim to connect people with their dream
                properties. With a vast portfolio of apartments, villas, and
                modern homes, we guarantee satisfaction and comfort in every
                deal.
              </p>
            </div>
            <div class="col-md-6">
              <img
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                class="img-fluid"
                alt="About Us"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="properties" class="py-5">
        <div class="container">
          <h2 class="text-center mb-4">Featured Properties</h2>
          <div class="row">
            <div class="col-md-4 property-card">
              <div class="card">
                <img
                  src="https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  class="card-img-top"
                  alt="Property"
                />
                <div class="card-body">
                  <h5 class="property-title">Modern Apartment</h5>
                  <p class="property-location">New York City</p>
                  <p class="property-price">$1,200,000</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 property-card">
              <div class="card">
                <img
                  src="https://images.pexels.com/photos/164516/pexels-photo-164516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  class="card-img-top"
                  alt="Property"
                />
                <div class="card-body">
                  <h5 class="property-title">Luxury Villa</h5>
                  <p class="property-location">Los Angeles</p>
                  <p class="property-price">$3,500,000</p>
                </div>
              </div>
            </div>

            <div class="col-md-4 property-card">
              <div class="card">
                <img
                  src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  class="card-img-top"
                  alt="Property"
                />
                <div class="card-body">
                  <h5 class="property-title">Beachfront House</h5>
                  <p class="property-location">Miami</p>
                  <p class="property-price">$2,800,000</p>
                </div>
              </div>
            </div>

            <div class="col-md-4 property-card mt-4">
              <div class="card">
                <img
                  src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  class="card-img-top"
                  alt="Property"
                />
                <div class="card-body">
                  <h5 class="property-title">Cozy Cottage</h5>
                  <p class="property-location">San Francisco</p>
                  <p class="property-price">$850,000</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 property-card mt-4">
              <div class="card">
                <img
                  src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  class="card-img-top"
                  alt="Property"
                />
                <div class="card-body">
                  <h5 class="property-title">Urban Studio</h5>
                  <p class="property-location">Chicago</p>
                  <p class="property-price">$450,000</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 property-card mt-4">
              <div class="card">
                <img
                  src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  class="card-img-top"
                  alt="Property"
                />
                <div class="card-body">
                  <h5 class="property-title">Mountain Retreat</h5>
                  <p class="property-location">Aspen</p>
                  <p class="property-price">$2,000,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="subscription-plans"
        className="py-5"
        style={{ backgroundColor: "#1a1a1a", color: "#fff" }}
      >
        <div className="container">
          <h2 className="text-center mb-5 text-light font-weight-bold">
            Choose Your Plan
          </h2>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card bg-dark text-light p-4 text-center shadow-lg rounded-lg border-0">
                <h3 className="text-primary mb-3">Basic Plan</h3>
                <p className="display-4 text-primary mb-3">$19.99/month</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-3">
                    <i className="fas fa-check text-success me-2"></i>10
                    Property Listings
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check text-success me-2"></i>Basic
                    Support
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-times text-danger me-2"></i>No Premium
                    Features
                  </li>
                </ul>
                <a href="#" className="btn btn-primary btn-lg shadow-none">
                  Select Plan
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card bg-dark text-light p-4 text-center shadow-lg rounded-lg border-0">
                <h3 className="text-primary mb-3">Standard Plan</h3>
                <p className="display-4 text-primary mb-3">$49.99/month</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-3">
                    <i className="fas fa-check text-success me-2"></i>50
                    Property Listings
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check text-success me-2"></i>Priority
                    Support
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check text-warning me-2"></i>Access to
                    Reports
                  </li>
                </ul>
                <a href="#" className="btn btn-primary btn-lg shadow-none">
                  Select Plan
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card bg-dark text-light p-4 text-center shadow-lg rounded-lg border-0">
                <h3 className="text-primary mb-3">Premium Plan</h3>
                <p className="display-4 text-primary mb-3">$99.99/month</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-3">
                    <i className="fas fa-check text-success me-2"></i>Unlimited
                    Property Listings
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check text-success me-2"></i>24/7
                    Premium Support
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check text-success me-2"></i>Advanced
                    Analytics
                  </li>
                </ul>
                <a href="#" className="btn btn-primary btn-lg shadow-none">
                  Select Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndexPage;

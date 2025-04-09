import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [properties, setProperties] = useState([]);
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selected, setSelected] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    setIsAdmin(role === "admin");

    axios.get("http://localhost:3000/getProperty")
      .then(res => setProperties(res.data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  const deleteProperty = async (id) => {
    const confirmDelete = window.confirm("Delete this listing?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/deleteProperty/${id}`);
        setProperties(prev => prev.filter(p => p._id !== id));
      } catch (err) {
        console.error("Delete failed:", err);
        alert("Could not remove the listing.");
      }
    }
  };

  const uniqueLocations = [...new Set(properties.map(p => p.location))];

  const filtered = properties.filter(p => {
    const matchLoc = location ? p.location === location : true;
    const matchPrice = maxPrice ? p.price <= parseInt(maxPrice) : true;
    return matchLoc && matchPrice;
  });

  const slides = [
    {
      img: "https://images.pexels.com/photos/29247927/pexels-photo-29247927.jpeg",
      title: "Your next place is waiting",
      desc: "Browse listings tailored to your needs.",
      btnText: "View Listings"
    },
    {
      img: "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg",
      title: "Modern living spaces",
      desc: "Contemporary homes with smart features.",
      btnText: "Explore Options"
    },
    {
      img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      title: "More space, more comfort",
      desc: "Discover spacious homes in top areas.",
      btnText: "Check It Out"
    }
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="/">RealEstateHub</a>
          <div className="ms-auto d-flex gap-3">
            {isAdmin && (
              <a href="/list-property" className="btn btn-light text-primary fw-bold">
                List Property
              </a>
            )}
            <button className="btn btn-danger" onClick={() => (window.location.href = "/")}>
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slides.map((slide, idx) => (
            <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
              <img src={slide.img} className="d-block w-100 carousel-img" alt="property" />
              <div className="carousel-caption">
                <h1 className="display-5 fw-bold text-white">{slide.title}</h1>
                <p className="lead text-white">{slide.desc}</p>
                <a href="#properties" className="btn btn-light text-primary fw-bold px-4 py-2">
                  {slide.btnText}
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      <div className="container my-5" id="properties">
        <h2 className="text-center text-white mb-4">Available Listings</h2>

        <div className="row mb-4">
          <div className="col-md-6">
            <label className="form-label text-white">Location</label>
            <select className="form-select" value={location} onChange={(e) => setLocation(e.target.value)}>
              <option value="">All</option>
              {uniqueLocations.map((loc, i) => (
                <option key={i} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label text-white">Max Price (₹)</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter upper price limit"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          {filtered.length > 0 ? (
            filtered.map((p) => (
              <div className="col-md-4" key={p._id}>
                <div className="card mb-4 property-card">
                  <img src={`http://localhost:3000${p.image}`} className="card-img-top" alt={p.title} />
                  <div className="card-body">
                    <h5>{p.title}</h5>
                    <p>{p.location}</p>
                    <p>₹ {p.price.toLocaleString()}</p>
                    <p><strong>Type:</strong> {p.propertyType}</p>
                    <button
                      className="btn btn-primary w-100 mb-2"
                      data-bs-toggle="modal"
                      data-bs-target="#propertyModal"
                      onClick={() => setSelected(p)}
                    >
                      More Info
                    </button>
                    {isAdmin && (
                      <button
                        className="btn btn-danger w-100"
                        onClick={() => deleteProperty(p._id)}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-light">
              <p>No results found for current filters.</p>
            </div>
          )}
        </div>
      </div>

      <div className="modal fade" id="propertyModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            {selected && (
              <>
                <div className="modal-header">
                  <h5 className="modal-title">{selected.title}</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => setSelected(null)}></button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6">
                      <img src={`http://localhost:3000${selected.image}`} alt={selected.title} className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                      <p>{selected.description}</p>
                      <table className="table">
                        <tbody>
                          <tr><th>Price</th><td>₹ {selected.price.toLocaleString()}</td></tr>
                          <tr><th>Location</th><td>{selected.location}</td></tr>
                          <tr><th>Type</th><td>{selected.propertyType}</td></tr>
                          <tr><th>Size</th><td>{selected.size}</td></tr>
                          <tr><th>Bedrooms</th><td>{selected.bedrooms}</td></tr>
                          <tr><th>Bathrooms</th><td>{selected.bathrooms}</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setSelected(null)}>
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

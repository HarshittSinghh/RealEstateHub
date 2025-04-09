import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-5 bg-black" style={{ backgroundColor: '#333', color: '#fff' }}>
      <div className="container">
        <h2 className="text-center mb-4 text-light">What Our Clients Say</h2>
        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-light p-4 text-center shadow-lg rounded">
              <img
                src="https://randomuser.me/api/portraits/women/1.jpg"
                alt="Sarah Johnson"
                className="rounded-circle mx-auto mb-3"
                style={{ width: '120px', height: '120px' }}
              />
              <p className="mb-2">
                “I had no idea buying a home could feel this easy. RealEstateHub walked me through everything and made me feel confident every step of the way.”
              </p>
              <div className="mb-2">
                <span className="text-warning">&#9733;</span>
                <span className="text-warning">&#9733;</span>
                <span className="text-warning">&#9733;</span>
                <span className="text-warning">&#9733;</span>
                <span className="text-secondary">&#9734;</span>
              </div>
              <h5 className="text-primary fw-bold">– Sarah Johnson</h5>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-light p-4 text-center shadow-lg rounded">
              <img
                src="https://randomuser.me/api/portraits/men/2.jpg"
                alt="Mark Wilson"
                className="rounded-circle mx-auto mb-3"
                style={{ width: '120px', height: '120px' }}
              />
              <p className="mb-2">
                “From our first call to closing day, the whole journey felt smooth and stress-free. I felt like they truly cared about what was right for me.”
              </p>
              <div className="mb-2">
                <span className="text-warning">&#9733;</span>
                <span className="text-warning">&#9733;</span>
                <span className="text-warning">&#9733;</span>
                <span className="text-warning">&#9733;</span>
                <span className="text-warning">&#9733;</span>
              </div>
              <h5 className="text-primary fw-bold">– Mark Wilson</h5>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-light p-4 text-center shadow-lg rounded">
              <img
                src="https://randomuser.me/api/portraits/women/3.jpg"
                alt="Emily Brown"
                className="rounded-circle mx-auto mb-3"
                style={{ width: '120px', height: '120px' }}
              />
              <p className="mb-2">
                “Selling my house felt overwhelming until I found RealEstateHub. They handled everything professionally and got me a great deal—fast!”
              </p>
              <div className="mb-2">
                <span className="text-warning">&#9733;</span>
                <span className="text-warning">&#9733;</span>
                <span className="text-warning">&#9733;</span>
                <span className="text-warning">&#9733;</span>
                <span className="text-secondary">&#9734;</span>
              </div>
              <h5 className="text-primary fw-bold">– Emily Brown</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

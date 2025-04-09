import React from "react";

const VideoSection = () => {
  return (
    <section
      id="video-section"
      className="position-relative text-white"
      style={{ height: "100vh" }}
    >

      <div className="ratio ratio-16x9 position-absolute top-0 start-0 w-100 h-100">
        <video
          autoPlay
          muted
          loop
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
        >
          <source src='../assets/video.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container h-100 d-flex justify-content-center align-items-center position-relative">
        <div className="text-center bg-dark bg-opacity-75 p-4 rounded">
          <h1 className="display-4 fw-bold mb-3">Find Comfort. Feel at Home.</h1>
          <p className="lead mb-4">
            Start your journey to a new space. Whether you're moving in or moving on, we're here for you.
          </p>
          <a href="#" className="btn btn-primary btn-lg">
            Let’s Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

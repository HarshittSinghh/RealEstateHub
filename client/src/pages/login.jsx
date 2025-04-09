import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const go = useNavigate();

  const [userType, setUserType] = useState("customer");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const signIn = async (e) => {
    e.preventDefault();

    if (!mail || !pass || !userType) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: mail,
          password: pass,
          role: userType,
        }),
      });

      const data = await response.json();

      if (data && data.success) {
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("userRole", userType);
        go("/home");
      } else {
        alert(data?.message || "Invalid credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a
            className="navbar-brand"
            href="/"
            style={{ fontWeight: "bold", fontSize: "22px" }}
          >
            RealEstateHub
          </a>
          <div className="ms-auto">
            <a
              className="btn btn-light"
              href="/"
              style={{ color: "#0d6efd", fontWeight: "500" }}
            >
              Home
            </a>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <h2 className="text-center">Welcome to RealEstateHub</h2>
        <div className="row mt-4 align-items-center">
          <div className="col-md-6 text-center">
            <img
              src="https://ysac.ca/wp-content/uploads/2023/06/Illustration-House-investment-growth-Real-estate-Property-value.webp"
              alt="Login Visual"
              className="img-fluid rounded"
              style={{ maxHeight: "300px" }}
            />
          </div>

          <div className="col-md-6">
            <h4 className="text-center mb-3">Select Your Portal</h4>

            <div className="d-flex justify-content-center mb-3">
              <button
                className={`btn me-2 ${
                  userType === "customer" ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => setUserType("customer")}
              >
                Customer
              </button>
              <button
                className={`btn ${
                  userType === "admin" ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => setUserType("admin")}
              >
                Admin
              </button>
            </div>

            <form onSubmit={signIn}>
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-success w-100"
                style={{ marginTop: "10px" }}
              >
                Login as{" "}
                {userType.charAt(0).toUpperCase() + userType.slice(1)}
              </button>
            </form>

            <hr />

            <div className="text-center mt-3">
              <button
                className="btn btn-outline-danger"
                onClick={() => alert("Google Signup coming soon!")}
              >
                <img
                  src="https://t4.ftcdn.net/jpg/03/91/79/25/360_F_391792593_BYfEk8FhvfNvXC5ERCw166qRFb8mYWya.jpg"
                  alt="Google"
                  width="20"
                  style={{ marginRight: "8px" }}
                />
                Signup with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

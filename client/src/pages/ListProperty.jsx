import React, { useState } from "react";

const AddPropertyForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    size: "",
    features: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      const response = await fetch("http://localhost:3000/add-property", {
        method: "POST",
        body: data,
      });

      if (response.ok || response.redirected) {
        alert("Property added successfully!");
        
        setFormData({
          title: "",
          description: "",
          price: "",
          location: "",
          propertyType: "",
          bedrooms: "",
          bathrooms: "",
          size: "",
          features: "",
          image: null,
        });

        const imgInput = document.getElementById("image");
        if (imgInput) imgInput.value = "";
      } else {
        const errorText = await response.text();
        alert("Failed: " + errorText);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Server error occurred.");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header">
              <h5>Add New Property</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                {[
                  { label: "Title", name: "title", type: "text" },
                  { label: "Description", name: "description", type: "textarea" },
                  { label: "Price (₹)", name: "price", type: "number" },
                  { label: "Location", name: "location", type: "text" },
                  { label: "Bedrooms", name: "bedrooms", type: "number" },
                  { label: "Bathrooms", name: "bathrooms", type: "number" },
                  { label: "Size (sq ft)", name: "size", type: "number" },
                  { label: "Features", name: "features", type: "text", placeholder: "e.g. Pool, Garden" }
                ].map((field) => (
                  <div className="mb-3" key={field.name}>
                    <label className="form-label">{field.label}</label>
                    {field.type === "textarea" ? (
                      <textarea
                        className="form-control"
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        rows="3"
                        required
                      />
                    ) : (
                      <input
                        className="form-control"
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        placeholder={field.placeholder || ""}
                        onChange={handleChange}
                        required
                      />
                    )}
                  </div>
                ))}

                <div className="mb-3">
                  <label className="form-label">Type</label>
                  <select
                    className="form-control"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select Type --</option>
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Condo">Condo</option>
                    <option value="Land">Land</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Upload Image</label>
                  <input
                    className="form-control"
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Submit Property
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyForm;

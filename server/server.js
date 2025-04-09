const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "public/images")));

const users = [
  { role: "admin", email: "admin@gmail.com", password: "admin123" },
  { role: "customer", email: "customer@gmail.com", password: "customer123" },
];

app.post("/api/login", (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const foundUser = users.find(
    (u) => u.email === email && u.password === password && u.role === role
  );

  if (foundUser) {
    res.status(200).json({ message: "Login successful", user: foundUser });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

const imageFolder = path.join(__dirname, "public/images");
if (!fs.existsSync(imageFolder)) {
  fs.mkdirSync(imageFolder, { recursive: true });
  console.log("Image folder created");
}

mongoose
  .connect("mongodb://localhost:27017/studentDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Mongo error:", err));

const propertySchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  location: String,
  image: String,
});

const Property = mongoose.model("Property", propertySchema);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/images"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

app.get("/", (req, res) => res.send("API Working"));

app.post("/add-property", upload.single("image"), async (req, res) => {
  const newProperty = new Property({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    location: req.body.location,
    image: req.file ? "/images/" + req.file.filename : "",
  });

  try {
    await newProperty.save();
    res.json({ message: "Property added" });
  } catch (err) {
    res.status(500).json({ message: "Error saving property" });
  }
});

app.get("/properties", async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
});

app.put("/property/:id", async (req, res) => {
  const updated = await Property.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

app.delete("/property/:id", async (req, res) => {
  await Property.findByIdAndDelete(req.params.id);
  res.json({ message: "Property deleted" });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));

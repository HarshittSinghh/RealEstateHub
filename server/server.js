const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "public/images")));

const users = [
  {
    role: "admin",
    email: "admin@gmail.com",
    password: "admin123",
  },
  {
    role: "customer",
    email: "customer@gmail.com",
    password: "customer123",
  },
];

app.post("/api/login", (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  const user = users.find(
    (u) => u.email === email && u.password === password && u.role === role
  );

  if (user) {
    res.status(200).json({
      success: true,
      message: `${role} logged in successfully!`,
      user: {
        email: user.email,
        role: user.role,
      },
    });
  } else {
    res
      .status(401)
      .json({ success: false, message: "Invalid credentials or role." });
  }
});

const imgDir = path.join(__dirname, "public", "images");
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
  console.log("Images folder created.");
}

mongoose
  .connect("mongodb://localhost:27017/realEstateDB")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("DB error", err);
  });

const Property = require("./model/Property");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    const name =
      Date.now() +
      "-" +
      Math.floor(Math.random() * 1000) +
      path.extname(file.originalname);
    cb(null, name);
  },
});

const upload = multer({ storage });

app.get("/", (req, res) => {
  res.send("API is working fine");
});

app.get("/getProperty", (req, res) => {
  Property.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.error("Fetch error", err);
      res.status(500).json({ msg: "Internal error" });
    });
});

app.post("/add-property", upload.single("image"), async (req, res) => {
  const body = req.body;
  const imgPath = req.file ? "/images/" + req.file.filename : "";

  const featArr = body.features
    ? body.features.split(",").map((f) => f.trim())
    : [];

  const newProp = new Property({
    title: body.title,
    description: body.description,
    price: body.price,
    location: body.location,
    image: imgPath,
    propertyType: body.propertyType,
    bedrooms: parseInt(body.bedrooms),
    bathrooms: parseInt(body.bathrooms),
    size: parseInt(body.size),
    features: featArr,
  });

  try {
    await newProp.save();
    res.redirect("/home");
  } catch (err) {
    console.error("Save error:", err);
    res.status(500).send("Something went wrong");
  }
});

app.get("/getAllProperties", async (req, res) => {
  try {
    const data = await Property.find({});
    res.send(data);
  } catch (err) {
    console.error("Fetch all error:", err);
    res.status(500).send("Internal error");
  }
});


app.put("/updateProperty/:id", async (req, res) => {
  try {
    const updated = await Property.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(updated);
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).send("Failed to update property");
  }
});

app.post("/deleteProperty", async (req, res) => {
  try {
    const { id } = req.body;
    await Property.findByIdAndDelete(id);
    res.status(200).send({ message: "Property deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).send({ message: "Failed to delete property" });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

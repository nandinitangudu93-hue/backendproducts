const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dns = require("dns");

dotenv.config();

const connectDb = require("./config/db");
const productRouter = require("./routes/productRouter");

const app = express();

// DNS
dns.setServers(["8.8.8.8", "1.1.1.1"]);

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDb();

// Routes
app.use("/api/products", productRouter);

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is running successfully",
  });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
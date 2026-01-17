require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

console.log("🔥 INDEX.JS FILE IS RUNNING 🔥");

const app = express();
app.use(express.json());

// DB
connectDB();

// ROUTES
const userRoutes = require("./routes/users");
console.log("✅ users routes loaded");

// MOUNT ROUTE  ⬅️ PAY ATTENTION
app.use("/users", userRoutes);

// ROOT TEST
app.get("/", (req, res) => {
  res.send("Housing Project is Working!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

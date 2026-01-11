

const express = require("express");
const app = express();
app.use(express.json());
// import routes
const healthRoute = require("./routes/health");
const userRoutes = require("./routes/users");

// use routes
app.use("/health", healthRoute);

app.use("/users", userRoutes);


app.get("/",(req,res)=> {
    res.send("Housing Project is Working!");
});

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});
let users = [];
app.post("/users", (req, res) => {
  const { name, income, city, savings } = req.body;

  if (!name || !income || !city || !savings) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const user = {
    id: users.length + 1,
    name,
    income,
    city,
    savings
  };

  users.push(user);

  res.status(201).json({
    message: "User created successfully",
    user
  });
});
app.get("/users", (req, res) => {
  res.json(users);
});

let users = []; // temporary in-memory storage
let idCounter = 1;

exports.createUser = (req, res) => {
  const { name, income, city, savings } = req.body;

  if (!name || !income || !city || !savings) {
    return res.status(400).json({
      error: "All fields are required"
    });
  }

  const newUser = {
    id: idCounter++,
    name,
    income,
    city,
    savings
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    user: newUser
  });
};

exports.getUsers = (req, res) => {
  res.json(users);
};

const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static("public"));

// Handle form submission
app.post("/submit", (req, res) => {
  const { name, branch, year } = req.body;

  res.send(`
    <h2>Submitted Information</h2>
    <p><strong>Student Name:</strong> ${name}</p>
    <p><strong>Branch:</strong> ${branch}</p>
    <p><strong>Year:</strong> ${year}</p>
  `);
});

app.get("/", (req, res) => {
  res.send("Server is working!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
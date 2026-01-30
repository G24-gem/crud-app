require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

/* ================================
   MIDDLEWARE
================================ */

// Parse JSON bodies
app.use(express.json());

// Parse HTML form data
app.use(express.urlencoded({ extended: true }));

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));


/* ================================
   DATABASE
================================ */

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// Test DB connection
pool.connect()
  .then(client => {
    console.log("PostgreSQL connected");
    client.release();
  })
  .catch(err => {
    console.error("DB connection error:", err);
    process.exit(1);
  });

// Make pool available everywhere
app.locals.db = pool;


/* ================================
   ROUTES
================================ */

// API routes (we’ll create these files next)
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/records", require("./routes/record.routes"));


// Default route → serve login page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, "public", "register.html"));
})


/* ================================
   SERVER
================================ */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

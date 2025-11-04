import express from "express";
import mysql from "mysql2";

const router = express.Router();

// --- MySQL Connection ---
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin123", // your password
  database: "kopitoki"
});

// --- GET all menu items ---
router.get("/", (req, res) => {
  const query = "SELECT * FROM menu_items";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching menu items:", err);
      res.status(500).json({ message: "Server error" });
    } else {
      res.json(results);
    }
  });
});

export default router;

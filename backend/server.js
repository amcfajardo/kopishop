import express from 'express';
import cors from 'cors';
import db from './config/db.js'; 

const app = express();
app.use(cors());
app.use(express.json());

// Example route
app.get('/menu', (req, res) => {
  db.query('SELECT * FROM menu_items', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Database query failed' });
    } else {
      res.json(results);
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

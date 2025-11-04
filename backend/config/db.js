import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // your MySQL username
  password: 'admin123', // your MySQL password
  database: 'kopitoki'  // your database name
});

db.connect((err) => {
  if (err) {
    console.error(' Database connection failed:', err);
    process.exit(1);
  }
  console.log(' Connected to kopitoki database');
});

export default db;

import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        
  password: 'admin123', 
  database: 'kopitoki'  
});

db.connect((err) => {
  if (err) {
    console.error(' Database connection failed:', err);
    process.exit(1);
  }
  console.log(' Connected to kopitoki database');
});

export default db;

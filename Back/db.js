const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sakila',
  port: 3309         
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    process.exit(1); // Stop server if DB not connected
  }
  console.log('Connected to MySQL database');
});

module.exports = db;

const express = require('express');
const router = express.Router();
const db = require('../db'); // Adjust path according to your structure

// POST route to handle message submissions
router.post('/', (req, res) => {
    console.log('Request received to list tables');
  
    const sql = 'SHOW TABLES'; // SQL query to get all tables
  
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching tables:', err);
        return res.status(500).json({ error: 'Error fetching tables' });
      }

      console.log(results);
      
  
      // MySQL returns an array of objects, need to extract table names
      const tables = results.map(row => Object.values(row)[0]);
  
      
      res.status(200).json({ tables });
    });
  });
  

module.exports = router;

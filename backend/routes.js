const express = require('express');
const mysql = require('mysql');

const router = express.Router();



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'liverpool2019+',
    database: 'test'
  });

  router.get('/users', (req, res) => {
    const query = 'SELECT * FROM users';
  
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error executing query: ', error);
        if (error.sqlMessage) {
          // MySQL error
          res.status(500).json({ error: 'Internal server error' });
        } else {
          // Non-MySQL error
          res.status(500).json({ error: 'An unexpected error occurred' });
        }
      } else {
        res.json(results);
      }
    });
  });


  connection.end();

  module.exports = router;

  
  
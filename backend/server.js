const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const routes = require('./routes');
const cors = require('cors');

const app = express();


app.use(express.json());

// Enable CORS
app.use(cors({
  origin: 'http://localhost:3000'
}));

// app.use(cors());

app.use('/api', routes);

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'liverpool2019+',
  database: 'test',
});



// Login endpoint
app.post('/api/login', (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  // Check if the username and password are provided
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  // Check if the user exists in the database
  pool.query('SELECT * FROM users WHERE username = ?', username, (error, results) => {
    if (error) {
      console.error('Error during login:', error);
      return res.status(500).json({ error: 'Internal server error.' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }else {
      const user = results[0];
      console.log("thee user", user);

    // Compare the provided password with the hashed password in the database
    bcrypt.compare(password, user.password, (bcryptError, bcryptResult) => {
      if (bcryptError) {
        console.log(bcryptResult);
        console.error('Error during password comparison:', bcryptError);
        res.status(500).json({ error: 'Internal server error.' });
      } else if (bcryptResult) {
        // Passwords match, login successful
      // Create a JSON Web Token (JWT) with the user's ID as the payload
        const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful' , token });
      } else {
        // Passwords don't match, invalid credentials
        res.status(401).json({ message: 'Invalid username or password' });
      }
      
    });
  }
  });
});



// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

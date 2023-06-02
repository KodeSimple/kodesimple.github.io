// // server.js
// const express = require('express');
// const cors = require('cors');
// const jwt = require('jsonwebtoken');

// const app = express();
// const PORT = 8080;
// const secret = 'your_secret_key'; // Replace with your actual secret key

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Dummy user data
// const users = [
//   {
//     id: 1,
//     username: 'user1',
//     password: 'password1',
//     products: [
//       { id: 11, name: 'Product 1' },
//       { id: 12, name: 'Product 2' },
//       { id: 13, name: 'Product 3' },
//     ],
//   },
//   {
//     id: 2,
//     username: 'user2',
//     password: 'password2',
//     products: [
//       { id: 11, name: 'Product 1' },
//       { id: 12, name: 'Product 2' },
//       { id: 13, name: 'Product 3' },
//     ],
//   },
// ];

// // Login route
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   // Find the user with matching username and password
//   const user = users.find((user) => user.username === username && user.password === password);

//   if (user) {
//     // Generate a JWT token
//     const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });
//     res.json({ status: true, token });
//   } else {
//     res.json({ status: false, message: 'Login failed, wrong credentials' });
//   }
// });

// // Protected route to get product list based on user ID
// app.get('/products/:id', authenticateToken, (req, res) => {
//   const userId = parseInt(req.params.id);

//   // Check if the user exists
//   const user = users.find((user) => user.id === userId);
//   if (!user) {
//     return res.status(404).json({ message: 'User not found' });
//   }

//   // Get the product list based on the user ID
//   const productList = user.products;

//   res.json(productList);
// });

// // Middleware to authenticate JWT token
// function authenticateToken(req, res, next) {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(401).json({ message: 'No token provided' });
//   }

//   jwt.verify(token, secret, (err, decoded) => {
//     if (err) {
//       return res.status(403).json({ message: 'Failed to authenticate token' });
//     }

//     req.userId = decoded.id;
//     next();
//   });
// }

// app.listen(PORT, () => {
//   console.log(`Server is listening to http://localhost:${PORT}`);
// });




const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

// Register a middleware function that parses incoming JSON payloads/request
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000'
}));

// middleware logger
app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.get('/', (req, res) => { //http://localhost:8080/
    res.send('Hello World');
});

app.post('/greeting', (req, res) => { //http://localhost:8080/greeting
    const name = req.body.name;
    const greeting = `Hello Master ${name}`;
    res.send(greeting);
});

app.use('/users', require('./routes/users.router')); //http://localhost:8080/users
app.use('/products', require('./routes/products.router')); //http://localhost:8080/products


app.listen(PORT, () => {
    console.log(`Server is listening to http://localhost:${PORT}`);
});
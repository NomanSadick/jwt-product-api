const jwt = require("jsonwebtoken");

const secretKey = "abc12345";
const userId = "12345";


// / Task 3: Generate JWT token
function generateToken(userId) {
  const payload = {
    user_id: userId
  };

  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  return token;
}

// Task 4: Express.js middleware for JWT authentication
function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'No token provided.' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token.' });
    }

    // Token is valid, attach the decoded payload to the request object
    req.user = decoded;
    next();
  });
}

// Example usage
// Call generateToken to generate a token
const token = generateToken(userId);
console.log('Generated Token:', token);

// Call authenticate middleware to verify a token
const req = {
  headers: {
    authorization: token
  }
};
const res = {
  status: function (code) {
    console.log('Status:', code);
    return this;
  },
  json: function (data) {
    console.log('Response:', data);
  }
};
const next = function () {
  console.log('Token is valid.');
};

authenticate(req, res, next);
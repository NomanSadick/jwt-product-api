### **মডিউল ১০ এর এসাইনমেন্ট**

### **Task 1: Mongoose Schema and Model**

Create a Mongoose schema and model for a "Product" collection with the following fields:

- name (String)
- price (Number)
- description (String)
- createdAt (Date)

### **Task 2: Express.js Route**

Create an Express.js route that handles a GET request to '/products' and returns a JSON response containing all products from the Mongoose "Product" collection. Ensure that the response includes only the name and price fields for each product.

### **Task 3: JSON Web Tokens (JWT)**

Write a function called generateToken that generates a JWT token using the 'jsonwebtoken' library. The function should accept a user ID and a secret key as parameters and return the generated token.

### Task 4: Express.js Middleware

Create an Express.js middleware function called authenticate that verifies the JWT token in the request headers using the 'jsonwebtoken' library. If the token is valid, it should call the next middleware function. Otherwise, it should return a 401 Unauthorized error.

### **Submission:**

Please submit your github repository link. Please do not include node_modules folder in the repository.

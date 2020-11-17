const express = require('express');
const authMiddleware = require("./middlewares/auth");
const bodyParser = require('body-parser');


const app = express();

app.use(authMiddleware);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// Database connection
require("./database")();

// Require Customers routes
require('./routes/customer')(app);

app.listen(3000, () => {
  console.log("App is running on port 3000....");
})

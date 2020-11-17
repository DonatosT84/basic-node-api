const express = require('express');
const authMiddleware = require("./middlewares/auth");
const bodyParser = require('body-parser');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');


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

const swaggerOptions = {
  swaggerDefinition: {
    info : {
      title: 'Basic Node API',
      description: 'Basic Node API',
      contact: {
        name: 'developer'
      },
      servers: ['http://localhost:3000']
    }
  },
  apis: ['routes/*.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.listen(3000, () => {
  console.log("App is running on port 3000....");
})

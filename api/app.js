const express = require('express');
const authMiddleware = require("./middlewares/auth");
const bodyParser = require('body-parser');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const dbConnect = require("./database");
const routesCustomer =require('./routes/customer');
const graphQL = require('../api/graphQL');
const swaggerOptions = require('./config/swagger');


async function createApp(config){ 

  await dbConnect(config);

  const app = express();

  app.use(authMiddleware);

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));

  // parse requests of content-type - application/json
  app.use(bodyParser.json());

  // adding routes
  routesCustomer(app);

  // adding graphql endpoint
  graphQL(app)

  // adding swagger
  app.use('/', swaggerUI.serve, swaggerUI.setup( swaggerJsDoc(swaggerOptions)));

  return app
}

module.exports = createApp
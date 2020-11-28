const express = require('express');
const bodyParser = require('body-parser');
const swaggerUI = require('swagger-ui-express');
const expressWinston = require('express-winston');
const swaggerJsDoc = require('swagger-jsdoc');

const authMiddleware = require("./middlewares/auth");
const dbConnect = require("./database");
const routesCustomer = require('./routes/customer');
const graphQL = require('../api/graphQL');
const swaggerOptions = require('./config/swagger');
const { errorLoggerOptions, loggerOptions } = require('./config/winston');


async function createApp(config){ 

  await dbConnect(config);

  const app = express();

  app.use(authMiddleware);

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));

  // parse requests of content-type - application/json
  app.use(bodyParser.json());

  // add express-winston logger
  app.use(expressWinston.logger(loggerOptions));

  // adding routes
  routesCustomer(app);

  // add express-winston errorLogger
  app.use(expressWinston.errorLogger(errorLoggerOptions));

  // adding graphql endpoint
  graphQL(app)

  // adding swagger
  app.use('/', swaggerUI.serve, swaggerUI.setup( swaggerJsDoc(swaggerOptions)));

  return app
}

module.exports = createApp
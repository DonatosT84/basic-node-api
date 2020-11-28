const routesPath = 'api/routes/*.js';

const swaggerOptions = {
  swaggerDefinition: {
    info : {
      title: 'Basic Node API',
      description: 'Basic Node API',
      contact: {
        name: 'developer'
      },
      servers: [process.env.APP_DOMAIN]
    }
  },
  apis: [routesPath]
}

module.exports = swaggerOptions;
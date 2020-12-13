const mongoose = require('mongoose');

require('dotenv').config();

// config
const config = {
  port: process.env.APP_PORT,
  db: {
    dbUrl: process.env.DB_URL,
    mongoose: mongoose
  }
}


const createApp = require('./api/app');

createApp(config).then(app => { 
  app.listen(config.port, () => {
    console.log(`App is running on port ${config.port}....`);
  });
}).catch((err) => {
  new Error(err);
})





require('dotenv').config();

// config
const config = {
  db: {
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD
  }
}


const createApp = require('./api/app');

createApp(config).then(app => { 
  app.listen(3000, () => {
    console.log("App is running on port 3000....");
  });
}).catch((err) => { 
  console.error(err)
  // TODO: Add winston.js as logger library
  // TODO: Add winston express as http loggers
})





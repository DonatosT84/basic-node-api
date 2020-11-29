const mongoose = require('mongoose');

require('dotenv').config();

// config
const config = {
  db: {
    dbUrl: process.env.DB_URL,
    mongoose: mongoose
  }
}


const createApp = require('./api/app');

createApp(config).then(app => { 
  app.listen(3000, () => {
    console.log("App is running on port 3000....");
  });
}).catch((err) => {
  new Error(err);
})





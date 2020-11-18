const mongoose = require('mongoose')
require('dotenv').config()

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const url = `mongodb+srv://${dbUser}:${dbPassword}@basic-node-api-1.1pfx7.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}

function connect() {
  mongoose.connect(url, connectionParams)
    .then(() => {
      console.log('Connected to database ');
    })
    .catch((err) => {
      console.error(`Error connecting to the database. \n${err}`);
      process.exit();
    })
}

module.exports = connect;
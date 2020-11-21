const mongoose = require('mongoose')

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}

async function connect(config) {

  const {dbName, dbUser, dbPassword} = config.db;

  // TODO: for integration test make the DB_URL also a variable
  const url = `mongodb+srv://${dbUser}:${dbPassword}@basic-node-api-1.1pfx7.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  try {
    console.log(url)
    await mongoose.connect(url, connectionParams);
    console.log('Connected to database ');
  } catch (err) { 
      console.error(`Error connecting to the database. \n${err}`);
      // process.exit();
  }
}


module.exports = connect;
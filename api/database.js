const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}

async function connect(config) {

  const { dbUrl, mongoose } = config.db;

  try {
    await mongoose.connect(dbUrl, connectionParams);
    console.log('Connected to database ');
  } catch (err) { 
      // console.error(`Error connecting to the database. \n${err}`);
      return new Error(err);
  }
}


module.exports = connect;
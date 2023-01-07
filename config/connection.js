const { connect, connection } = require("mongoose"); // import the mongoose module

// Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally
const connectionString =
  process.env.MONGODB_URI || "mongodb//127.0.0.1:27017/socialNetworkDB"; // set the connection string to the database

connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }); // connect to the database

module.exports = connection; // export the connection to the database

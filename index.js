const express = require("express"); // import the Express.js module
const db = require("./config/connection"); // import the connection to the database
const routes = require("./routes"); // import the routes from the routes folder
const cwd = process.cwd(); // get the current working directory
const PORT = process.env.PORT || 3001; // set the port for the Express server to listen on
const app = express(); // create a new Express.js server

const activity = cwd.includes("01-Activities") // Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
  ? cwd.split("/01-Activities/")[1]
  : cwd;

app.use(express.urlencoded({ extended: true })); // parse incoming string or array data
app.use(express.json()); // parse incoming JSON data
app.use(routes); // add route middleware

db.once("open", () => {
  // once the database connection is open, start the Express.js server
  app.listen(PORT, () => {
    // start the Express.js server
    console.log(`API server for ${activity} running on port ${PORT}!`); // log the activity name and port number to the terminal
  });
});

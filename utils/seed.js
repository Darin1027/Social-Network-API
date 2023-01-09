const connection = require("../config/connection"); // import the connection to the database
const { User, Thought } = require("../models"); // import the User and Thought models
const { thoughtData, userData, emailData, reactionData } = require("./data"); // import the data from the data.js file

// Seed the database with the data from the data.js file
const seed = async () => { // create a function that will seed the database
  await User.deleteMany({}); // delete all users from the database
  await Thought.deleteMany({}); // delete all thoughts from the database

  // Create new users
  const users = userData.map((username, i) => ({ // map over the userData array and create a new user for each username
    username,
    email: emailData[i], // use the emailData array to assign an email to each user
  }));

  const createdUsers = await User.create(users);

  // Create new thoughts
  const thoughts = thoughtData.map((thoughtText, i) => ({
    thoughtText,
    username: createdUsers[i % createdUsers.length].username,
  }));

  const createdThoughts = await Thought.create(thoughts);

  // Add reactions to thoughts
  for (let i = 0; i < createdThoughts.length; i++) {
    const reactions = reactionData.map((reactionBody) => ({
      reactionBody,
      username: createdUsers[i % createdUsers.length].username,
    }));
    createdThoughts[i].reactions = reactions;
    await createdThoughts[i].save();
  }

  console.log("Seed data successfully added to the database!");
};

seed().catch((error) => {
  console.error(error);
});

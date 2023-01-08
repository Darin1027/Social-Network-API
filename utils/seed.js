const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { thoughtData, userData, emailData, reactionData } = require("./data");

const seed = async () => {
  // Clear existing data in the database
  await User.deleteMany({});
  await Thought.deleteMany({});

  // Create new users
  const users = userData.map((username, i) => ({
    username,
    email: emailData[i],
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

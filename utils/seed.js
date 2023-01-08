const connection = require("../config/connection");
const { User, Thought } = require("../models");

connection.on("error", (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Create empty array to hold the users
  const user = [];

  // Loop 20 times -- add users to the user array
  for (let i = 0; i < 20; i++) {
    // Get some random thought objects using a helper function that we imported from ./data
    const thought = getRandomthought(20);

    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];
    const email = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

    user.push({
      first,
      last,
      email,
      thought,
    });
  }

  // Add user to the collection and await the results
  await User.collection.insertMany(user);

  // Add thought to the collection and await the results
  await Thought.collection.insertOne({
    thoughtName: 'I want to go to UCLA!',
    user: [...user],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(user);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});


// const connection = require("../config/connection");
const { User, Thought } = require("../models");

// Insert the seed data into the database
User.insertMany(users, (error, docs) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Successfully inserted ${docs.length} users.`);
  }
});

Thought.insertMany(thoughts, (error, docs) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Successfully inserted ${docs.length} thoughts.`);
  }
});

// Seed data for the User model
const users = [
  {
    username: "johndoe",
    email: "john.doe@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "janedoe",
    email: "jane.doe@example.com",
    thoughts: [],
    friends: [],
  },
];

// Seed data for the Thought model
const thoughts = [
  {
    thoughtText: "I had a great time at the beach today!",
    createdAt: new Date(),
    username: "johndoe",
    reactions: [],
  },
  {
    thoughtText: "I love hiking in the mountains!",
    createdAt: new Date(),
    username: "janedoe",
    reactions: [],
  },
];

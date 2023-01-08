// const users = [
//   "Aaran",
//   "Aaren",
//   "Aarez",
//   "Aarman",
//   "Aaron",
//   "Aaron-James",
//   "Aarron",
//   "Aaryan",
//   "Aaryn",
//   "Aayan",
//   "Aazaan",
//   "Abaan",
//   "Abbas",
//   "Abdallah",
//   "Abdalroof",
//   "Abdihakim",
//   "Abdirahman",
//   "Abdisalam",
//   "Abdul",
//   "Abdul-Aziz",
//   "Abdulbasir",
//   "Abdulkadir",
//   "Abdulkarem",
//   "Smith",
//   "Jones",
//   "Coollastname",
//   "enter_name_here",
//   "Ze",
//   "Zechariah",
//   "Zeek",
//   "Zeeshan",
//   "Zeid",
//   "Zein",
//   "Zen",
//   "Zendel",
//   "Zenith",
//   "Zennon",
//   "Zeph",
//   "Zerah",
//   "Zhen",
//   "Zhi",
//   "Zhong",
//   "Zhuo",
//   "Zi",
//   "Zidane",
//   "Zijie",
//   "Zinedine",
//   "Zion",
//   "Zishan",
//   "Ziya",
//   "Ziyaan",
//   "Zohaib",
//   "Zohair",
//   "Zoubaeir",
//   "Zubair",
//   "Zubayr",
//   "Zuriel",
//   "Xander",
//   "Jared",
//   "Courtney",
//   "Gillian",
//   "Clark",
//   "Jared",
//   "Grace",
//   "Kelsey",
//   "Tamar",
//   "Alex",
//   "Mark",
//   "Tamar",
//   "Farish",
//   "Sarah",
//   "Nathaniel",
//   "Parker",
// ];

// const thoughts = [
//   "Decision Tracker",
//   "Find My Phone",
//   "Learn Piano",
//   "Starbase Defender",
//   "Tower Defense",
//   "Monopoly Money Manager",
//   "Movie trailers",
//   "Hello world",
//   "Stupid Social Media App",
//   "Notes",
//   "Messages",
//   "Email",
//   "Compass",
//   "Firefox",
//   "Running app",
//   "Cooking app",
//   "Poker",
//   "Deliveries",
// ];

// // Get a random item given an array
// const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// // Gets a random full name
// const getRandomName = () =>
//   `${getRandomArrItem(users)} ${getRandomArrItem(users)}`;

// // Function to generate random thoughts that we can add to users object.
// const getRandomthoughts = (int) => {
//   const results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       thoughtsName: getRandomArrItem(thoughts),
//     });
//   }
//   return results;
// };

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
    reactions: ["I hope you have a great day there! Miss you!"],
  },
  {
    thoughtText: "I love hiking in the mountains!",
    createdAt: new Date(),
    username: "janedoe",
    reactions: ["I love hiking too!"],
  },
];

// Export the data for use in seed.js
module.exports = { users, thoughts };

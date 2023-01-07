const mongoose = require("mongoose"); // Require mongoose

// Define the Reaction subdocument schema
const ReactionSchema = new mongoose.Schema({
  // Define the ReactionSchema using the mongoose.Schema() method
  reactionId: {
    // Set the reactionId property to an object
    type: Schema.Types.ObjectId, // Set the type to ObjectId
    default: () => new Types.ObjectId(), // Set the default property to a function that returns a new ObjectId
  },
  reactionBody: {
    // Set the reactionBody property to an object
    type: String, // Set the type to String
    required: true, // Set the required property to true
    maxlength: 280, // Set the maxlength property to 280
  },
  username: {
    // Set the username property to an object
    type: String, // Set the type to String
    required: true, // Set the required property to true
  },
  createdAt: {
    // Set the createdAt property to an object
    type: Date, // Set the type to Date
    default: Date.now, // Set the default property to Date.now
    get: (timestamp) => new Date(timestamp).toDateString(), // Set the get property to a function that formats the createdAt date
  },
});

module.exports = ReactionSchema;

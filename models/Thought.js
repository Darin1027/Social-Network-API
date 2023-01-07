const mongoose = require("mongoose"); // Require mongoose

// Define the Thought model
const ThoughtSchema = new mongoose.Schema( // Define the ThoughtSchema using the mongoose.Schema() method
  {
    thoughtText: {
      // Set the thoughtText property to an object
      type: String, // Set the type to String
      required: true, // Set the required property to true
      minlength: 1, // Set the minlength property to 1
      maxlength: 280, // Set the maxlength property to 280
    },
    createdAt: {
      // Set the createdAt property to an object
      type: Date, // Set the type to Date
      default: Date.now, // Set the default property to Date.now
      get: (createdAt) => moment(createdAt).format("MMM DD, YYYY [at] hh:mm a"), // Set the get property to a function that formats the createdAt date using moment.js
    },
    username: {
      // Set the username property to an object
      type: String, // Set the type to String
      required: true, // Set the required property to true
    },
    reactions: [ReactionSchema], // Set the reactions property to an array of objects
  },
  {
    toObject: {
      // Set the toObject property to an object with the virtuals property set to true
      virtuals: true, // Set the virtuals property to true
    },
    toJSON: {
      // Set the toJSON property to an object with the virtuals property set to true
      virtuals: true, // Set the virtuals property to true
    },
  }
);

// Define the Reaction subdocument schema
const ReactionSchema = new mongoose.Schema({
  // Define the ReactionSchema using the mongoose.Schema() method
  reactionId: {
    // Set the reactionId property to an object
    type: mongoose.Types.ObjectId, // Set the type to ObjectId
    default: mongoose.Types.ObjectId, // Set the default property to mongoose.Types.ObjectId
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
    get: (createdAt) => moment(createdAt).format("MMM DD, YYYY [at] hh:mm a"), // Set the get property to a function that formats the createdAt date using moment.js
  },
});

// Define the reactionCount virtual field
ThoughtSchema.virtual("reactionCount").get(function () {
  // Define the reactionCount virtual field using the mongoose.Schema() method
  return this.reactions.length; // Return the length of the reactions array
});

const Thought = mongoose.model("Thought", ThoughtSchema); // Create the Thought model using the ThoughtSchema

module.exports = Thought; // Export the Thought model

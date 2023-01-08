const { Schema, model } = require("mongoose"); // Require mongoose
const ReactionSchema = require("./Reaction"); // Require the Reaction model

// Define the Thought model
const ThoughtSchema = new Schema( // Define the ThoughtSchema using the mongoose.Schema() method
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
      get: (timestamp) => new Date(timestamp).toDateString(), // Set the get property to a function that formats the createdAt date
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

// Define the reactionCount virtual field
ThoughtSchema.virtual("reactionCount").get(function () {
  // Define the reactionCount virtual field using the mongoose.Schema() method
  return this.reactions.length; // Return the length of the reactions array
});

const Thought = model("Thought", ThoughtSchema); // Create the Thought model using the ThoughtSchema

module.exports = Thought; // Export the Thought model

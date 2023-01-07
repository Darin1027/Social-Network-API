const mongoose = require("mongoose"); // Import the mongoose library

// Define the User model
const UserSchema = new mongoose.Schema( // Define the UserSchema using the mongoose.Schema() method
  {
    username: {
      // Set the username property to an object
      type: String, // Set the type to String
      unique: true, // Set the unique property to true
      required: true, // Set the required property to true
      trim: true, // Set the trim property to true
    },
    email: {
      // Set the email property to an object
      type: String, // Set the type to String
      required: true, // Set the required property to true
      unique: true, // Set the unique property to true
      match: /^\S+@\S+\.\S+$/, // Set the match property to a regular expression that checks for a valid email address
    },
    thoughts: [
      // Set the thoughts property to an array of objects
      {
        type: mongoose.Types.ObjectId, // Set the type to ObjectId
        ref: "Thought", // Set the ref property to "Thought"
      },
    ],
    friends: [
      // Set the friends property to an array of objects
      {
        type: mongoose.Types.ObjectId, // Set the type to ObjectId
        ref: "User", // Set the ref property to "User"
      },
    ],
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

// Define the friendCount virtual field
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length; // Return the length of the friends array
});

const User = mongoose.model("User", UserSchema); // Create the User model using the UserSchema

module.exports = User; // Export the User model

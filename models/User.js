const mongoose = require("mongoose");

// Define the User model
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^\S+@\S+\.\S+$/,
    },
    thoughts: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);

// Define the friendCount virtual field
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

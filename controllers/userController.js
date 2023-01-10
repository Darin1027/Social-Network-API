const { User, Thought } = require("../models");

module.exports = {
  // Get all Users
  getUser(req, res) {
    User.find()
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single User
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json({
              user,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a user and remove all associated thoughts
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No such user exists" })
          : Thought.findOneAndUpdate(
              { user: req.params.userId },
              { $pull: { students: req.params.userId } },
              { new: true }
            )
      )
      .then((thought) =>
        !thought
          ? res.status(404).json({
              message: "User deleted, but no thoughts found",
            })
          : res.json({ message: "User successfully deleted" })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((data) =>
        !data
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json(data)
      )
      .catch((err) => res.status(500).json(err));
  },
  
  // Delete a friend from a user's friend list
  addFriend(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: "No user with that ID" });
        }
        // Check if the friendId is already in the friends array
        if (user.friends.includes(req.params.friendId)) {
          return res.status(400).json({ message: "Friendship already exists" });
        }
        // If not, add the friendId to the friends array
        user.friends.push(req.params.friendId);
        // save the user with the new friend
        user
          .save()
          .then((updatedUser) => res.json(updatedUser))
          .catch((err) => res.status(500).json(err));
      })
      .catch((err) => res.status(500).json(err));
  },

  // Delete a friend from a user
  deleteFriend(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: "No user with that ID" });
        }
        // Find the index of the friend to delete
        const friendIndex = user.friends.indexOf(req.params.friendId);
        if (friendIndex === -1) {
          return res.status(404).json({ message: "No friend with that ID" });
        }
        // Remove the friend from the friends list
        user.friends.splice(friendIndex, 1);
        // Save the updated user
        user
          .save()
          .then((updatedUser) => res.json(updatedUser))
          .catch((err) => res.status(500).json(err));
      })
      .catch((err) => res.status(500).json(err));
  },
};

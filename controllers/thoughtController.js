const { User, Thought } = require("../models");

module.exports = {
  // Get all thoughts
  Thought(req, res) {
    Thought.find()
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  },

  // Get a course
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.ThoughtId })
      .select("-__v")
      .then((course) =>
        !course
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(course)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Create a thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Delete a course
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((data) =>
        !data
          ? res.status(404).json({ message: "No thought with that ID" })
          : User.deleteMany({ _id: { $in: Thought.User } })
      )
      .then(() => res.json({ message: "Thought and User deleted!" }))
      .catch((err) => res.status(500).json(err));
  },

  // Update a course
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((data) =>
        !data
          ? res.status(404).json({ message: "No thought with this id!" })
          : res.json(course)
      )
      .catch((err) => res.status(500).json(err));
  },
};

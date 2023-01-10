const { User, Thought } = require("../models");

module.exports = {
  // Get all thoughts
  getThought(req, res) {
    Thought.find()
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  },

  // Get a single thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
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

  // Delete a thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((data) =>
        !data
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json({ message: "Thought deleted successfully!" })
      )
      .catch((err) => res.status(500).json(err));
  },


  // Update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((data) =>
        !data
          ? res.status(404).json({ message: "No thought with this id!" })
          : res.json(data)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Add a reaction to a thought
  addReaction(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) => {
        if (!thought) {
          return res.status(404).json({ message: "No thought with that ID" });
        }
        // Add the reaction to the thought's reactions array
        thought.reactions.push({
          user: req.body.user,
          reaction: req.body.reaction,
        });
        // Save the thought with the new reaction
        thought
          .save()
          .then((updatedThought) => res.json(updatedThought))
          .catch((err) => res.status(500).json(err));
      })
      .catch((err) => res.status(500).json(err));
  },

  deleteReaction(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) => {
        if (!thought) {
          return res.status(404).json({ message: "No thought with that ID" });
        }
        // Find the index of the reaction to delete
        const reactionIndex = thought.reactions.findIndex(
          (reaction) => reaction._id == req.params.reactionId
        );
        if (reactionIndex === -1) {
          return res.status(404).json({ message: "No reaction with that ID" });
        }
        // Remove the reaction from the reactions array
        thought.reactions.splice(reactionIndex, 1);
        // Save the updated thought
        thought
          .save()
          .then((updatedThought) => res.json(updatedThought))
          .catch((err) => res.status(500).json(err));
      })
      .catch((err) => res.status(500).json(err));
  },
};

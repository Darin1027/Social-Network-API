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

  addReaction(req, res) {
    if (!req.params.id) {
      return res.status(400).json({ message: "Thought Id is missing" });
    }
    if (!req.body.reaction || req.body.reaction === "") {
      return res.status(400).json({ message: "Reaction can't be empty" });
    }

    Thought.findById(req.params.id, (err, foundThought) => {
      if (err) {
        return res.status(500).json(err);
      }
      if (!foundThought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      Thought.findByIdAndUpdate(
        req.params.id,
        { $push: { reactions: req.body.reaction } },
        { new: true, runValidators: true },
        (err, thought) => {
          if (err) {
            if (err.name === "ValidationError") {
              return res.status(400).json(err);
            }
            return res.status(500).json(err);
          }
          res.status(200).json(thought);
        }
      );
    });
  },

  deleteReaction(req, res) {
    Thought.findOne({ _id: req.params.thoughtId }, (err, thought) => {
      if (err) {
        return res.status(500).json(err);
      }
      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }
      // check if the reaction is present in the thought
      if (!thought.reactions.id(req.params.reactionId)) {
        return res.status(404).json({ message: "Reaction not found" });
      }

      // remove the reaction
      thought.reactions.id(req.params.reactionId).remove();
      thought.save((err, updatedThought) => {
        if (err) {
          return res.status(500).json(err);
        }
        res.status(200).json({ message: "Reaction deleted successfully" });
      });
    });
  },
};

const router = require("express").Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController.js");

// /api/thought
router.route("/").get(getThought).post(createThought);

// /api/thought/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought)
  .put(addReaction);

// /api/thought/:thoughtId/reaction/:reactionId
router.route("/:thoughtId/reaction/:reactionId").delete(deleteReaction);

module.exports = router;

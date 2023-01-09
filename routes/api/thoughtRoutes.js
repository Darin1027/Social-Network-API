// todo change to thoughts

const router = require("express").Router();
const {
  getThought,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
} = require("../../controllers/thoughtController.js");

// /api/thought
router.route("/").get(getThought).post(createThought);

// /api/thought/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);
//todo /api/thoughts/:thoughtId/reactions

module.exports = router;

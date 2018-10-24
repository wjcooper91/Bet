const router = require("express").Router();
const answersController = require("../../controllers/answersController");

// Matches with "/api/answers"
router.route("/")
  .get(answersController.findAll)
  .post(answersController.create);

// Matches with "/api/answers/:id"
router
  .route("/:id")
  .get(answersController.findById)
  .put(answersController.update)
  .delete(answersController.remove)
  .post(answersController.create);

module.exports = router;

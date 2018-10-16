const router = require("express").Router();
const answerController = require("../../controllers/answerController");

// Matches with "/api/answers"
router.route("/")
  .get(answerController.findAll)
  .post(answerController.create);

// Matches with "/api/answers/:id"
router
  .route("/:id")
  .get(answerController.findById)
  .put(answerController.update)
  .delete(answerController.remove)
  .post(answerController.create);

module.exports = router;

const router = require("express").Router();
const poolsController = require("../../controllers/poolsController");

// Matches with "/api/pools"
router.route("/")
  .get(poolsController.findAll)
  .post(poolsController.create);

// Matches with "/api/pools/:id"
router
  .route("/:id")
  .get(poolsController.findById)
  .put(poolsController.update)
  .delete(poolsController.remove)
  .post(poolsController.create);

module.exports = router;

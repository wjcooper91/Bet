const router = require("express").Router();
const poolRoutes = require("./pools");
const answerRoutes = require("./answers");

// pool routes
router.use("/answers", answerRoutes);
router.use("/pools", poolRoutes);


module.exports = router;

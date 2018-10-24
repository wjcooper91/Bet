const router = require("express").Router();
const poolRoutes = require("./pools");
const answerRoutes = require("./answers");
const userRoutes = require("./user");

// pool routes
router.use("/answers", answerRoutes);
router.use("/pools", poolRoutes);
router.use("/user", userRoutes);


module.exports = router;

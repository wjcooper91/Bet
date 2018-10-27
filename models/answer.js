const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  poolname: { type: String, required: true },
  username: { type: String, required: true },
  answer1: String,
  answer2: String,
  answer3: String,
  answer4: String,
  answer5: String,
  score: Number,
  date: { type: Date, default: Date.now }
});

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;

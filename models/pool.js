const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const poolSchema = new Schema({
  name: { type: String, required: true },
  ask1: { type: String, required: true },
  option1a: { type: String, required: true },
  option1b: { type: String, required: true },
  answer1: String,
  ask2: { type: String, required: true },
  option2a: { type: String, required: true },
  option2b: { type: String, required: true },
  answer2: String,
  ask3: { type: String, required: true },
  option3a: { type: String, required: true },
  option3b: { type: String, required: true },
  answer3: String,
  ask4: { type: String, required: true },
  option4a: { type: String, required: true },
  option4b: { type: String, required: true },
  answer4: String,
  ask5: { type: String, required: true },
  option5a: { type: String, required: true },
  option5b: { type: String, required: true },
  answer5: String,
  date: { type: Date, default: Date.now }
});

const Pool = mongoose.model("Pool", poolSchema);

module.exports = Pool;

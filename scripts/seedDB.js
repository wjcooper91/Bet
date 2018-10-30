const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://<User>:<poolparty1>@ds245523.mlab.com:45523/p00l-party"
  // "mongodb://localhost/p00l-party"
);

const poolSeed = [
  {
    name: "College Football Pick 'Em",
    ask1: "Who will Win?",
    option1a: "Georgia",
    option1b: "LSU",
    answer1: "",
    ask2: "Who will Win?",
    option2a: "Michigan",
    option2b: "Wisconsin",
    answer2: "",
    ask3: "Who will Win?",
    option3a: "Georgia Tech",
    option3b: "Duke",
    answer3: "",
    ask4: "Who will Win?",
    option4a: "Michigan St.",
    option4b: "Penn St.",
    answer4: "",
    ask5: "Who will Win?",
    option5a: "Washington",
    option5b: "Oregon",
    answer5: "",
    date: new Date(Date.now())
  },
  
];

db.Pool
  .remove({})
  .then(() => db.Pool.collection.insertMany(poolSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

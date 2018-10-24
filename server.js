const express = require("express");
const mongoose = require("mongoose");
const passport = require('passport');
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');

const app = express();
app.use(passport.initialize());
require('./passport')(passport);


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const users = require('./routes/api/user'); 
const pools = require('./routes/api/pools');
const answers = require('./routes/api/answers');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/user', users);
app.use('/api/pools', pools);
app.use('/api/answers', answers);


// Add routes, both API and view
// app.use(routes);
app.get('/', function(req, res) {
    res.send('hello');
});
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/testProject3");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});









const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User'); // Make sure require statements are in correct order
require('./services/passport');

mongoose.Promise = global.Promise;

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // how long the cookies last
    keys: [keys.cookieKey] // seed for key
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // require returns a function, so we can call it directly

const PORT = process.env.PORT || 5000; // environment variable
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

/**
 * Steps For Heroku Deployment:
 * Dynamic Port Binding
 * Specify Node Environment/Version (package.json)
 * Specify Start Script (package.json)
 * Create .gitignore file
 **/

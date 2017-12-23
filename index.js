const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ bye: 'buddy' });
});

const PORT = process.env.PORT || 5000; // environment variable
app.listen(PORT);

/**
 * Steps For Heroku Deployment:
 * Dynamic Port Binding
 * Specify Node Environment/Version (package.json)
 * Specify Start Script (package.json)
 * Create .gitignore file
 **/

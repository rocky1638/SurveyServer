const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'] // the things that we want google to give us
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google')); // Magic!

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};

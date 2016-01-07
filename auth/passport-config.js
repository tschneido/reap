var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

var strategy = new Auth0Strategy({
  domain:       'danielgeri.auth0.com',
  clientID:     '0hTtAUEMm4JAZj9iTE8Gnz5cwQVqqxaR',
  clientSecret: 'aZnZlTifY3zC5U6fDO26jFiT4VfksKGLWm4dStsxkyqfEZZ2vRg_TrlPijpHZ8Hm',
  callbackURL:  'http://localhost:3000/auth/callback-oauth0'
}, function(accessToken, refreshToken, extraParams, profile, done) {
  // accessToken is the token to call Auth0 API (not needed in the most cases)
  // extraParams.id_token has the JSON Web Token
  // profile has all the information from the user
  return done(null, profile);
});

passport.use(strategy);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = strategy;
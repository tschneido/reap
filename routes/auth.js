var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/login', function(req, res, next){
	res.render('login');
});

router.get('/callback-oauth0', passport.authenticate('auth0', { failureRedirect: '/failure' }),
	function(req, res) {
  	if (!req.user) {
    	throw new Error('user null');
  	}
  	res.redirect("/");
	}
);



module.exports = router;
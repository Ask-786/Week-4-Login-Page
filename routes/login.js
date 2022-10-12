var express = require('express');
const app = require('../app');
var router = express.Router();


/* GET login page. */
router.get(['/','/login'], function(req, res, next) {
  if(req.session.loggedIN){
    res.redirect('/home'); 
  }else{
    res.render('login',{message:false});
  }
});

router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.redirect('/login');
});


module.exports = router;

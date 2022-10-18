var express = require('express');
const app = require('../app');
var router = express.Router();

const username = "Ask@786"
const password = "123"



/* GET home page. */
router.post('/', function(req, res, next) {
  if(req.body.name === username && req.body.password === password){
    req.session.loggedIN=true;
    res.redirect('/home')
  }else{
    res.render('login',{message:true})
  }
});


/* GET login page. */
router.get('/', function(req, res, next) {
  if(req.session.loggedIN){
    res.redirect('/home'); 
  }else{
    res.render('login',{message:false});
  }
});


router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.redirect('/');
});


module.exports = router;

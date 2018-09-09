var express = require('express');
var router = express.Router();
var rp = require('request-promise');


router.get('/pages/about', function(req, res, next) {
  res.render('pages/about');
});

router.get('/users/login', function(req, res, next) {
  res.render('users/login');
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Imaginary Friend | Home' });
});


module.exports = router;

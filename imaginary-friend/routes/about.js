var express = require('express');
var router = express.Router();
var rp = require('request-promise');

/* GET about. */
router.get('/', function(req, res, next) {
  res.render('analytics', { title: 'Imaginary Friend | Analytics' });
});


module.exports = router;

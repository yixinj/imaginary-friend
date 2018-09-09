var express = require('express');
var router = express.Router();
var rp = require('request-promise');

router.get('/pages/about', function(req, res, next) {
  res.render('pages/about');
});

router.get('/users/login', function(req, res, next) {
  res.render('users/login');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Imaginary Friend | Home' });
  pyWordCloud();
});

module.exports = router;

function pyWordCloud() {
  // trying to connect with python file
  const spawn = require('child_process').spawn;
  const pythonProcess = spawn('python', ['../recorder.py']);

  var stringList = [];
  pythonProcess.stdout.on('data', data => {
    // stringified is the data but not in buffer format
    stringified = data.toString('utf8');
    console.log(stringified);

    stringList += stringified;
    //var myJson = JSON.stringify(stringList);
    // console.log(myJson);
    // (test)

    // getWordCloud('xxx');
  });
}

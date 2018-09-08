var express = require('express');
var router = express.Router();
var rp = require('request-promise');


router.get('/pages/about', function(req, res, next) {
  res.render('pages/about');
});


// api request for voice to text
// function getVoiceToText(input) {
//   return rp({
//     method: 'POST',
//     uri: '',
//     body: {

//     },
//     headers: {
//         'Content-Type': 'application/json',
//         // 'Ocp-Apim-Subscription-Key': process.env.APIkey
//     },
//     json: true
//   }).then((data) => {

//   }).catch(function(err) {
//     console.log(`Something went wrong ${err}`);
//   })
// }

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Imaginary Friend | Home' });
});


module.exports = router;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var unirest = require('unirest');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');

// var Canvas = require("canvas");
// var cloud = require("../");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));

app.use('/', indexRouter);

app.use('/users', usersRouter);

app.use('/about', aboutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);function callPythonMic(req, res) {
//     //   var spawn = require('child_process').spawn;
//     //   var process = spawn(‘python.py');
//     //   process.stdout.on(‘data’, function (data) {
//     //     res.send(data.toString());
//     //   });
//     // }
//   res.render('error');
// });

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
  getWordCloud('xxx');
});

// TODO: export to json
// TODO: make pretty graphics with the json's contents
function getWordCloud(json) {
  // get text in string format from json here

  unirest
    .post('https://wordcloudservice.p.mashape.com/generate_wc')
    .header(
      'X-Mashape-Key',
      'ZR9miz67Qpmsh6aslRQkitJPfWdap1PQOoKjsnfagcuQsUytdj'
    )
    .header('Content-Type', 'application/json')
    .header('Accept', 'application/json')
    .send({
      f_type: 'png',
      width: 800,
      height: 500,
      s_max: '7',
      s_min: '1',
      f_min: 1,
      r_color: 'TRUE',
      r_order: 'TRUE',
      s_fit: 'FALSE',
      fixed_asp: 'TRUE',
      rotate: 'TRUE',
      textblock:
        'generate word cloud generate word cloud awesome great png jpg pdf awesome generate word cloud'
    })
    .end(function(result) {
      console.log(result.status, result.headers, result.body);
    });
}

// Database setup
const mongoose = require('mongoose');
const mongoURI =
  'mongodb://hello:medhacks1@ds249942.mlab.com:49942/imaginary-friend';

mongoose.connect(
  mongoURI,
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = app;

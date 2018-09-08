const express = require('express');
const router = express.Router();
const User = require('../models/user');

// direct user to pg to make new acct
router.get('/new', (req, res, next) => {
  console.log('redir /new');
  res.render('users/new');
})

//Users index - delete later
router.get('/', (req, res, next) => {
  res.render('users.index');
});

// make a new user
router.post('/', (req, res, next) => {
  const user = new User(req.body);
  console.log('attempting to save new user');
  console.log(req.body);

  user.save(function(err, user) {
    if(err) console.log(err);
    return res.redirect('/');
  });
})

module.exports = router;
const router = require('express').Router();
const User = require('../models').User;
const Article = require('../models').Article;
const models = require ('../models/index')
var passport = require('../config/passport');

// Get Everybody
function allUsers(req, res) {
    User.findAll({}).then(function(data) {
        res.send(data)
    }).catch(function(error) {
        console.log("Error returning all Users in databse", error);
        res.sendStatus(500);
    })
}

// Get one user
function oneUser(req, res) {
    User.findById(req.params.id,{
      include: [Article]
    })
    .then(function(oneUser) {
        res.send(oneUser)
    }).catch((err) => console.log('one User', error))
}

// Edit a user
function editUser(req, res) {
  console.log(req.body.firstName)
  console.log(req.body.lastName)
    User.findById(req.params.id)
    .then(function(Userinfo) {
        Userinfo.update({
          firstName: req.body.firstName,
          lastName: req.body.lastName
        })

    }).then(function(data) {
      res.send(data)
  }).catch(function(error){
    console.log('error:', error)
  })
}





// Create a person

function createUser(req, res) {
User.create({
    userName: req.body.userName,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    location: req.body.location,
    company: req.body.company
  }).then(function(newUser) {
      passport.authenticate('local', function(err, user, info) {
        if(err) { return next(err); }
        if(!user) { res.status(401).end(); return; }
        req.logIn(user, function(err) {
          if(err) { res.status(401).end(); return; }
          res.send(JSON.stringify(user)).end();
        });
      })(req, res, next);
  })
   .catch((err) => {
     res.send(err).end();
   });
}

function login(req, res, next) {
  console.log('login')
  passport.authenticate('local', function(err, user, info) {
    console.log('user', user)
    if (err) { return next(err); }
    if (!user) { res.status(401).end(); return; }
    req.logIn(user, function(err) {
      if (err) { res.status(401).end(); return; }
      res.send(JSON.stringify(user)).end();
    });
  })(req, res, next);
}

function logout(req, res) {
  console.log('<==== Log Out User ===>')
  req.logout();
  req.session.destroy();
}

router.route('/')
.get(allUsers)
.post(createUser)

router.route('/login')
.post(login)

router.route('/logout')
.get(logout)

router.route('/:id')
.put(editUser)
.get(oneUser)

module.exports = router;

const router = require('express').Router();
const User = require('../models').User;
const Article = require('../models').Article;
const models = require ('../models/index')

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
    firstName: req.body.firstName, 
    lastName: req.body.lastName,
    location: req.body.location
  }).then(function(newUser) {
    console.log(newUser)
    res.send(newUser)
  })
}

router.route('/')
.get(allUsers)
.post(createUser)

router.route('/:id')
.put(editUser)
.get(oneUser)

module.exports = router;

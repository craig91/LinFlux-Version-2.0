const router = require('express').Router();
const User = require('../models').User;

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
    User.findById(req.params.id).then(function(oneUser) {
        res.send(oneUser)
    }).catch((err) => console.log('one User', error))
}

// Edit a user
function editUser(req, res) {
    User.findById(req.params.id).then(function(Userinfo) {
        Userinfo.update({firstName: req.body.firstName, lastName: req.body.lastName}).then(function(data) {
            res.send(data)
        })
    })
}


// Create a person

function createUser(req, res) {
User.create({firstName: req.body.firstName, lastName: req.body.lastName}).then(function(newUser) {
    console.log(newUser)
    res.send(newUser)
})
}

router.route('/').get(allUsers).post(createUser)

router.route('/:id').put(editUser).get(oneUser)

module.exports = router;

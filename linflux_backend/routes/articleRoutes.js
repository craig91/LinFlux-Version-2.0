const router = require('express').Router();
const Article = require('../models').Article;
const models = require('../models/index');

function allArticles(req, res) {
  Article.findAll({}).then(function(data) {
    res.send(data)
  }).catch(function(error) {
    console.log("Error returning all Blogs in database", error);
    res.sendStatus(500);
  })
}

router.route('/')
.get(allArticles)

module.exports = router;

const router = require('express').Router();
const Article = require('../models').Article;
const User = require('../models').User;
const models = require('../models/index');


function allArticles(req, res) {
  Article.findAll({}).then(function(data) {
    res.send(data)
  }).catch(function(error) {
    console.log("Error returning all Blogs in database", error);
    res.sendStatus(500);
  })
}

function OneArticle(req, res) {
  Article.findById(req.params.id, {
    include : [User]
  })
  .then(function(OneArticle){
    res.send(OneArticle)
  })
  .catch((err) => console.log('one Article', error))
}

router.route('/')
.get(allArticles)

router.route('/:id')
.get(OneArticle)

module.exports = router;

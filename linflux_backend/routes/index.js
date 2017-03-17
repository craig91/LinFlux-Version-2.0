const router = require('express').Router();

router.use('/users', require('./userRoutes.js'));
router.use('/articles', require('./articleRoutes.js'));

module.exports = router;

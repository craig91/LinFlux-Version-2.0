const router = require('express').Router();

router.use('/users', require('./userRoutes.js'));

module.exports = router;

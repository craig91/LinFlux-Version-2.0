const router = require('express').Router();

router.use('/users', require('./userRoutes.js'));
router.use('/articles', require('./articleRoutes.js'));
router.use('/distros', require('./distroRoutes.js'));

module.exports = router;

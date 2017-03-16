const router = require('express').Router();

router.use('/users', require('./userRoutes.js'));
router.use('/blogs', require('./blogRoutes.js'));

module.exports = router;

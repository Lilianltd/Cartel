const express = require('express');
const router = express.Router();


router.use('/event', require('../routes/event'));
router.use('/place', require('../routes/place'));
router.use('/school', require('../routes/school'));
router.use('/score', require('../routes/score'));
router.use('/team', require('../routes/team'));

router.get('/', async(req, res) => {
    res.send('Welcome to the Cartel API !');
});

module.exports = router;

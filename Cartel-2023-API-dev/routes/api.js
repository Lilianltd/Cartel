const express = require('express');

const eventRoute = require('./event');
const placeRoute = require('./place');
const schoolRoute = require('./school');
const scoreRoute = require('./score');
const teamRoute = require('./team');
const weatherRoute = require('./weather');
const logsRoute = require('./logs');
const router = express.Router();


router.use('/events', eventRoute);
router.use('/places', placeRoute);
router.use('/logs', logsRoute);
router.use('/schools', schoolRoute);
router.use('/scores', scoreRoute);
router.use('/teams', teamRoute);
router.use('/weather', weatherRoute);

router.get('/', (req, res) => {
    res.send('200');
});

module.exports = router;

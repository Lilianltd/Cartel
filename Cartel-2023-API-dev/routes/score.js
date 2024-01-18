const express = require('express');

const scores = require('../prisma/models/score');
const events = require('../prisma/models/event');
const places = require('../prisma/models/place');
const teams = require('../prisma/models/team');
const schools = require('../prisma/models/school');
const router = express.Router();

router.get('/', async (req, res) => {
    // #swagger.tags = ['Scores']
    try {
        let score_list = await scores.findAll();
        for (const element of score_list) {
            element.event = await events.findById(element.eventId);
            element.place = await places.findById(element.event.placeId);
        }
        res.status(200).json(score_list);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/:id', async (req, res) => {
    // #swagger.tags = ['Scores']
    try {
        res.status(200).json(await scores.findById(req.params.id));
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/event/:id', async (req, res) => {
    // #swagger.tags = ['Scores']
    try {
        let score_list = await scores.findByEventId(req.params.id);
        for (const element of score_list) {
            element.team = await teams.findById(element.teamId);
            element.team.school = await schools.findById(element.team.schoolId);
        }
        res.status(200).json(score_list);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/', async (req, res) => {
    // #swagger.tags = ['Scores']
    try {
        res.status(201).json(await scores.create(req.body.eventId, req.body.teamId));
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/:id', async (req, res) => {
    // #swagger.tags = ['Scores']
    try {
        let score = await scores.update(req.params.id, req.body.eventId, req.body.teamId, req.body.value);
        // update event if finished status changed
        let event = await events.findById(req.body.eventId);
        if (event.finished !== req.body.finished) {
            await events.update(event.id, event.name, event.sport, event.placeId, event.date, req.body.finished);
        }
        score.event = event;
        res.status(201).json(score);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    // #swagger.tags = ['Scores']
    try {
        await scores.remove(req.params.id);
        res.sendStatus(204);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/event/:eventId/team/:teamId', async (req, res) => {
    // #swagger.tags = ['Scores']
    try {
        await scores.removeByEventIdAndTeamId(req.params.eventId, req.params.teamId);
        res.sendStatus(204);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

module.exports = router;
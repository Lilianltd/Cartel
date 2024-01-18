const express = require('express');

const events = require('../prisma/models/event');
const scores = require('../prisma/models/score');
const teams = require('../prisma/models/team');
const schools = require('../prisma/models/school');
const places = require('../prisma/models/place');
const router = express.Router();

async function format_events(events, school){
    let found = true;
    for (const event of events) {
        if (school) found = false;
        event.teams = [];
        event.scores = await scores.findByEventId(event.id);
        // remove event from list if school not participating
        for (const score of event.scores) {
            let team = await teams.findById(score.teamId);
            team.school = await schools.findById(team.schoolId);
            event.teams.push(team);
            if (school) {
                if (team.school.name === school) found = true;
            }
        }
        if (!found) events = events.filter(e => e.id !== event.id); // remove event from list if school not participating
        else event.place = await places.findById(event.placeId); // only search for place if event is not removed
    }
    return events;
}

router.get('/', async (req, res) => {
    // #swagger.tags = ['Events']
    try {
        let all_events = await events.findAll(req.query.sport);
        res.set('Cache-Control', 'public, max-age=300');
        res.status(200).json(await format_events(all_events, req.query.school));
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/:id', async (req, res) => {
    // #swagger.tags = ['Events']
    try {
        let event = await events.findById(req.params.id);
        event.teams = [];
        event.scores = await scores.findByEventId(req.params.id)
        for (const score of event.scores) {
            let team = await teams.findById(score.teamId);
            team.school = await schools.findById(team.schoolId);
            event.teams.push(team);
        }
        event.place = await places.findById(event.placeId);
        res.status(200).json(event);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/last/update/', async (req, res) => {
    // #swagger.tags = ['Events']
    try {
        let last_update = await events.findLastUpdate();
        res.status(200).json(last_update);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/status/finished', async (req, res) => {
    // #swagger.tags = ['Events']
    try {
        let all_events = await events.findFinished(req.query.sport);
        res.set('Cache-Control', 'public, max-age=300');
        res.status(200).json(await format_events(all_events, req.query.school));
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});


router.get('/status/finished/sport/:sport_name/school/:school_name', async (req, res) => {
    // #swagger.tags = ['Events']
    try {
        let all_events = await events.findFinished(req.params.sport_name === 'all' ? null : req.params.sport_name);
        res.set('Cache-Control', 'public, max-age=300');
        res.status(200).json(await format_events(all_events, req.params.school_name === 'all' ? null : req.params.school_name));
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/status/current', async (req, res) => {
    // #swagger.tags = ['Events']
    try {
        let all_events = await events.findCurrent(req.query.sport);
        res.set('Cache-Control', 'public, max-age=300');
        res.status(200).json(await format_events(all_events, req.query.school));
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});


router.get('/status/current/sport/:sport_name/school/:school_name', async (req, res) => {
    // #swagger.tags = ['Events']
    try {
        let all_events = await events.findCurrent(req.params.sport_name === 'all' ? null : req.params.sport_name);
        res.set('Cache-Control', 'public, max-age=300');
        res.status(200).json(await format_events(all_events, req.params.school_name === 'all' ? null : req.params.school_name));
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/status/futur', async (req, res) => {
    // #swagger.tags = ['Events']
    try {
        let all_events = await events.findFutur(req.query.sport);
        res.set('Cache-Control', 'public, max-age=300');
        res.status(200).json(await format_events(all_events, req.query.school));
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});


router.get('/status/futur/sport/:sport_name/school/:school_name', async (req, res) => {
    // #swagger.tags = ['Events']
    try {
        let all_events = await events.findFutur(req.params.sport_name === 'all' ? null : req.params.sport_name);
        res.set('Cache-Control', 'public, max-age=300');
        res.status(200).json(await format_events(all_events, req.params.school_name === 'all' ? null : req.params.school_name));
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/', async (req, res) => {
    // #swagger.tags = ['Events']
    try {
        let event = await events.create(req.body.name, req.body.sport, req.body.placeId, req.body.date, req.body.finished);
        for (let i = 0; i < req.body.teams.length; i++) {
            let team_id = req.body.teams[i];
            await scores.create(event.id, team_id);
        }
        res.status(201).json(event);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/:id', async (req, res) => {
    // #swagger.tags = ['Events']
    try {
        let event = await events.update(req.params.id, req.body.name, req.body.sport, req.body.placeId, req.body.date, req.body.finished);
        for (let i = 0; i < req.body.teams.length; i++) {
            let team_id = req.body.teams[i];
            if (await scores.findByTeamAndEventId(event.id, team_id) == null) {
                await scores.create(event.id, team_id);
            }
        }
        // delete scores that are no longer in the event
        let scores_to_delete = await scores.findByEventId(event.id);
        for (let i = 0; i < scores_to_delete.length; i++) {
            let score = scores_to_delete[i];
            if (!req.body.teams.includes(score.teamId.toString())) {
                await scores.remove(score.id);
            }
        }
        res.json(event);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    // #swagger.tags = ['Events']
    try {
        await events.remove(req.params.id);
        res.sendStatus(204);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

module.exports = router;

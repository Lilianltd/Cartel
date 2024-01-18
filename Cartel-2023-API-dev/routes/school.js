const express = require('express');
const schools = require('../prisma/models/school');
const teams = require('../prisma/models/team');
const events = require("../prisma/models/event");
const router = express.Router();

router.get('/', async (req, res) => {
    // #swagger.tags = ['Schools']
    try {
        res.status(200).json(await schools.findAll());
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/:id', async (req, res) => {
    // #swagger.tags = ['Schools']
    try {
        res.status(200).json(await schools.findById(req.params.id));
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/last/update', async (req, res) => {
    // #swagger.tags = ['Schools']
    try {
        let last_update = await schools.findLastUpdate();
        res.status(200).json(last_update);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/', async (req, res) => {
    // #swagger.tags = ['Schools']
    try {
        let school = await schools.create(req.body.name, req.body.teams);
        res.status(201).json(school);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/:id', async (req, res) => {
    // #swagger.tags = ['Schools']
    try {
        let school = await schools.update(req.params.id, req.body.name);
        for(const team of req.body.teams){
            await teams.create(team.name, team.sport, school.id);
        }
        res.status(201).json(school);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    // #swagger.tags = ['Schools']
    try {
        await schools.remove(req.params.id);
        res.sendStatus(204);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

module.exports = router;
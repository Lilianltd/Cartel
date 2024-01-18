const express = require('express');
const teams = require('../prisma/models/team');
const schools = require("../prisma/models/school");
const events = require("../prisma/models/event");
const router = express.Router();


router.get('/school/:id', async (req, res) => {
    // #swagger.tags = ['Teams']
    try {
        let teams_list = await teams.findBySchoolId(req.params.id);
        res.status(200).json(teams_list);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/last/update', async (req, res) => {
    // #swagger.tags = ['Teams']
    try {
        let last_update = await teams.findLastUpdate();
        res.status(200).json(last_update);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/sport/:name', async (req, res) => {
    // #swagger.tags = ['Teams']
    try {
        let teams_list = await teams.findBySport(req.params.name);
        for (const team of teams_list) {
            team.school = await schools.findById(team.schoolId);
        }
        res.status(200).json(teams_list);
    }
    catch (error) {
        console.log(error);
        res.status(500).send
    }
});

router.delete('/:id', async (req, res) => {
    // #swagger.tags = ['Teams']
    try {
        await teams.remove(req.params.id);
        res.sendStatus(204);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

module.exports = router;
const express = require('express');

const places = require('../prisma/models/place');
const router = express.Router();

router.get('/', async (req, res) => {
    // #swagger.tags = ['Places']
    try {
        let all_places = await places.findAll();
        res.status(200).json(all_places);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/only/events', async (req, res) => {
    // #swagger.tags = ['Places']
    try {
        let all_places = await places.findAll(false);
        res.status(200).json(all_places);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/only/hotels', async (req, res) => {
    // #swagger.tags = ['Places']
    try {
        let all_places = await places.findAll(true);
        res.status(200).json(all_places);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/:id', async (req, res) => {
    // #swagger.tags = ['Places']
    try {
        let place = await places.findById(req.params.id);
        res.status(200).json(place);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/last/update', async (req, res) => {
    // #swagger.tags = ['Places']
    try {
        let last_update = await places.findLastUpdate();
        res.status(200).json(last_update);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/', async (req, res) => {
    // #swagger.tags = ['Places']
    try {
        res.status(201).json(await places.create(req.body.name, req.body.address, req.body.latitude, req.body.longitude, req.body.isHotel));
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/:id', async (req, res) => {
    // #swagger.tags = ['Places']
    try {
        res.status(200).json(await places.update(req.params.id, req.body.name, req.body.address, req.body.latitude, req.body.longitude, req.body.isHotel));
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    // #swagger.tags = ['Places']
    try {
        await places.remove(req.params.id);
        res.sendStatus(204);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

module.exports = router;
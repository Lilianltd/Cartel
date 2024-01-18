const express = require('express');

const logs = require('../prisma/models/logs');
const router = express.Router();


router.get('/', async (req, res) => {
    try{
        let result = await logs.findAll();
        res.status(200).json(result);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

module.exports = router;
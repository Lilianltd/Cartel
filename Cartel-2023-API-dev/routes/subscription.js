const subs = require('../prisma/models/subscription');
const express = require('express');
const router = express.Router();

router.post('/subscribe', async (req, res) => {
    try {
        let subscription = req.body;
        if (subscription && subscription.endpoint && subscription.keys) {
            let sub = await subs.create(subscription);
            res.status(201).json(sub);
        }
        else{
            res.status(400).send("Subscription is not valid");
        }
    }
    catch (err){
        console.log(err);
        res.status(500).send(err);
    }
});


router.post('/change', async (req, res) => {
    let old_sub = req.body.old_subscription;
    let new_sub = req.body.new_subscription;
    if (old_sub && old_sub.endpoint && new_sub && new_sub.endpoint && new_sub.keys) {
        let result = await subs.removeByEndpoint(old_sub.endpoint);
        if (result) {
            let sub = await subs.create(new_sub);
            res.status(201).json(sub);
        }
        else {
            res.status(404).send("Old subscription not found");
        }
    }
    else{
        res.status(400).send("Subscription is not valid");
    }
});


router.post('/unsubscribe', async (req, res) => {
    try {
        let endpoint = req.body.endpoint;
        let result = await subs.removeByEndpoint(endpoint);
        if (result) {
            res.status(200).json({message: 'Subscription deleted'});
        }
        else {
            res.status(404).send("Subscription not found");
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

});

// dev purpose
/*
router.delete('/unsubscribe_all', async (req, res) => {
    await subs.remove_all();
    res.status(200).json({message: 'All subscriptions deleted'});
});*/

module.exports = router;

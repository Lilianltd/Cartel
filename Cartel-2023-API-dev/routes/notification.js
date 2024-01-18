const webpush = require('web-push');
const subs = require('../prisma/models/subscription');
const express = require('express');
const router = express.Router();

webpush.setVapidDetails(process.env["MAILTO"], process.env["PUBLIC_VAPID_KEY"], process.env["PRIVATE_VAPID_KEY"]);

router.post('/send', (req, res) => {
    // send to all
    try {
        subs.getAll().then(subscriptions => {
            subscriptions.forEach(sub => {
                sub.keys = JSON.parse(sub.keys); // cast string to json to respect webpush format
                let payload = JSON.stringify({
                    title: req.body.title,
                    body: req.body.body,
                    icon: "",
                    url: ""
                });
                webpush.sendNotification(sub, payload).catch(err => {
                    console.log(err);
                });
            });
            res.status(200).json({message: 'Notification sent'});
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = router;

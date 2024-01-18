const express = require('express');
const api_key = process.env["weather_api_key"];
const https = require('https');

const router = express.Router();

router.get('/:insee/:day_gap/:hour', async (req, res) => {
    /***
     * Get today's weather in ales
     * @param insee : number : the insee code of the city
     * @param day_gap : number of days to add to today
     * @param hour : hour of the day
     * @returns : weather --> 0: sunny, 1: cloudy, 2: rainy and city name
     */
    // ales insee is 30007
    let insee = req.params.insee, day_gap = req.params.day_gap, hour=req.params.hour, period;
    if (hour < 8) {
        period = 0;
    }
    else if (hour < 14) {
        period = 1;
    }
    else if (hour < 20) {
        period = 2;
    }
    else {
        period = 3;
    }
    https.get('https://api.meteo-concept.com/api/forecast/daily/' + day_gap +'/period/' + period + '?token=' + api_key + '&insee=' + insee, (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            let result = JSON.parse(data), forecast = result['forecast'], weather = forecast['weather'], city = result['city']['name'];
            if (weather < 3) {
                res.status(200).send({'weather': 0, 'city': city});
            }
            else if (weather < 6) {
                res.status(200).send({'weather': 1, 'city': city});
            }
            else  {
                res.status(200).send({'weather': 2, 'city': city});
            }
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
});

module.exports = router;
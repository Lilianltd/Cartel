const events = require('./models/event');
const places = require('./models/place');
const schools = require('./models/school');
const scores = require('./models/score');
const volunteers = require('./models/volunteer');

const schoolSeed = async () => {
    await schools.create("ante","porttitor");
    await schools.create("porttitor pede","commodo");
    await schools.create("orci eget orci", "blandit");
    await schools.create("vel accumsan tellus","curabitur");
    await schools.create("fermentum donec","sed");
    await schools.create("leo pellentesque ultrices","ut");
    await schools.create("aliquamid sit amet", "mi");
    await schools.create("ipsum","blandit");
    await schools.create("faucibus cursus","bibendum");
    await schools.create("nulla", "last viverra");
}

const placeSeed = async () => {
    await places.create("volutpat eleifend donec",10,83),
    await places.create("ligula in lacus curabitur",80,86),
    await places.create("est et",94,58),
    await places.create("at velit vivamus vel",31,71),
    await places.create("ut suscipit a feugiat",40,21),
    await places.create("tristique in tempus",12,29),
    await places.create("nulla vel",15,62),
    await places.create("quis lectus suspendisse potenti",35,56),
    await places.create("rutrum rutrum",65,2),
    await places.create("nulla tempus vivamus in",55,37)
}

const eventSeed = async () => {
    await events.create("dui",1,"2022-06-21T03:09:00+00:00");
    await events.create("porttitor",2,"2022-06-21T03:07:00+00:00");
    await events.create("vitae",3,"2022-06-21T03:02:00+00:00");
    await events.create("ipsum",4,"2022-06-21T03:12:00+00:00");
    await events.create("ante",5,"2022-06-21T03:15:00+00:00");
    await events.create("aliquam",6,"2022-06-21T03:16:00+00:00");
    await events.create("in",7,"2022-06-21T03:18:00+00:00");
    await events.create("potenti",8,"2022-06-22T03:10:00+00:00");
    await events.create("adipiscing",9,"2022-06-22T03:12:00+00:00");
    await events.create("lacinia",10,"2022-06-22T03:17:00+00:00");
}

const volunteerSeed = async () => {
    await volunteers.create("massa","ppGlyAeqgj"),
    await volunteers.create("nulla","xkUfQKK"),
    await volunteers.create("rhoncus","bj6buSqfhTGV"),
    await volunteers.create("diam","tpFbRgfQ2GL1"),
    await volunteers.create("dui","tmlAGIqOB"),
    await volunteers.create("quis","OgZhzLZ"),
    await volunteers.create("sit","dP7Ej2Z"),
    await volunteers.create("turpis","O0hDscaiGuE"),
    await volunteers.create("akuna","UWe9OYVh"),
    await volunteers.create("cubilia","BwqY4OVXWMI3")
}

const scoreSeed = async () => {
    await scores.create(1,1);
    await scores.create(1,2);
    await scores.create(2,3);
    await scores.create(2,4);
    await scores.create(3,5);
    await scores.create(3,6);
    await scores.create(4,7);
    await scores.create(4,8);
    await scores.create(5,9);
    await scores.create(5,10);
    await scores.create(6,1);
    await scores.create(6,2);
    await scores.create(7,3);
    await scores.create(7,4);
    await scores.create(8,5);
    await scores.create(8,6);
    await scores.create(9,7);
    await scores.create(9,8);
    await scores.create(10,9);
    await scores.create(10,10);
}

const load = async () => {
    await schoolSeed();
    await placeSeed();
    await eventSeed();
    await volunteerSeed();
    await scoreSeed();
}

load();

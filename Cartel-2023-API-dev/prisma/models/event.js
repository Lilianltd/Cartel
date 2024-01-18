const prisma = require("../prismaClient")
const event = prisma["event"]

async function create(name, sport, placeId, date, finished) {
    return await event.create({
        data: {
            name: name,
            sport: sport,
            placeId: parseInt(placeId),
            date: new Date(date),
            finished: finished
        }
    })
}

async function update(id, name, sport, placeId, date, finished)  {
    return await event.update({
        where: {
            id: parseInt(id)
        },
        data: {
            name: name,
            sport: sport,
            placeId: parseInt(placeId),
            date: new Date(date),
            finished: finished,
            lastUpdate: new Date()
        }
    })
}

async function remove(id) {
    return await event.delete({
        where: {
            id: parseInt(id)
        }
    })
}
async function findAll(sport) {
    let events = await event.findMany({
        orderBy: {
            date: "desc"
        }
    });
    if (sport) {
        events = events.filter(e => e.sport === sport);
    }
    return events;
}

async function findById(id) {
    return await event.findUnique({
        where: {
            id: parseInt(id)
        }
    })
}

async function findLastUpdate() {
    let e = await event.findFirst({
        orderBy: {
            lastUpdate: "desc"
        },
        select: {
            lastUpdate: true
        }
    });
    return e.lastUpdate;
}

async function findFinished(sport) {
    let date = new Date();
    date.setHours(date.getHours() + 2);
    let events = await event.findMany({
        where: {
            date: {
                lte: date
            },
            finished: true
        },
        orderBy: {
            date: "desc"
        }
    });
    if (sport) {
        events = events.filter(e => e.sport === sport);
    }
    return events;
}

async function findCurrent(sport) {
    let date = new Date();
    date.setHours(date.getHours() + 2);
    let events = await event.findMany({
        where: {
            date: {
                lte: date
            },
            finished: false
        }
    });
    if (sport) {
        events = events.filter(e => e.sport === sport);
    }
    return events;
}

async function findFutur(sport) {
    // new date french utc
    let date = new Date();
    date.setHours(date.getHours() + 2);
    let events = await event.findMany({
        where: {
            date: {
                gte: date
            }
        }
    });
    if (sport) {
        events = events.filter(e => e.sport === sport);
    }
    return events;
}

module.exports = {
    create: create,
    findAll: findAll,
    findFinished: findFinished,
    findCurrent: findCurrent,
    findFutur: findFutur,
    findById: findById,
    findLastUpdate: findLastUpdate,
    update: update,
    remove: remove
}
const prisma = require("../prismaClient")
const score = prisma["score"]

async function create(eventId, teamId) {
    return await score.create({
        data: {
            eventId: parseInt(eventId),
            teamId: parseInt(teamId)
        }
    })
}

async function update(id, eventId, teamId, score_value)  {
    return await score.update({
        where: {
            id: parseInt(id)
        },
        data: {
            eventId: parseInt(eventId),
            teamId: parseInt(teamId),
            value: parseInt(score_value)
        }
    })
}

async function remove(id) {
    return await score.delete({
        where: {
            id: parseInt(id)
        }
    })
}

async function removeByEventIdAndTeamId(eventId, teamId) {
    let target = await findByTeamAndEventId(eventId, teamId);
    return await score.delete({
        where: {
            id: parseInt(target.id)
        }
    })
}

async function findAll() {
    return await score.findMany({
        orderBy: {
            event: {
                date: "desc"
            }
        }
    })
}

async function findById(id) {
    return await score.findUnique({
        where: {
            id: parseInt(id)
        }
    })
}

async function findByTeamAndEventId(eventId, teamId) {
    return await score.findFirst({
        where: {
            eventId: parseInt(eventId),
            teamId: parseInt(teamId)
        }
    })
}

async function findByEventId(id) {
    return await score.findMany({
        where: {
            eventId: parseInt(id)
        }
    })
}

module.exports = {
    create: create,
    findAll: findAll,
    findById: findById,
    findByTeamAndEventId: findByTeamAndEventId,
    findByEventId: findByEventId,
    update: update,
    remove: remove,
    removeByEventIdAndTeamId: removeByEventIdAndTeamId
}
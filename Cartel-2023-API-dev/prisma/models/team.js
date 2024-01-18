const prisma = require("../prismaClient");
const team = prisma["team"];

async function create(name, sport_name, schoolId) {
    return await team.create({
        data: {
            name: name,
            sport: sport_name,
            schoolId: schoolId
        }
    })
}

async function remove(id) {
    return await team.delete({
        where: {
            id: parseInt(id)
        }
    })
}
async function findAll() {
    return await team.findMany()
}

async function findById(id) {
    return await team.findUnique({
        where: {
            id: parseInt(id)
        }
    })
}

async function findBySchoolId(id) {
    return await team.findMany({
        where: {
            schoolId: parseInt(id)
        }
    })
}

async function findBySport(sport_name) {
    return await team.findMany({
        where: {
            sport: sport_name
        }
    })
}

async function findLastUpdate() {
    let t = await team.findFirst({
        orderBy: {
            lastUpdate: "desc"
        },
        select: {
            lastUpdate: true
        }
    });
    return t.lastUpdate;
}

module.exports = {
    create: create,
    findAll: findAll,
    findById: findById,
    findBySchoolId: findBySchoolId,
    findBySport: findBySport,
    findLastUpdate: findLastUpdate,
    remove: remove
}
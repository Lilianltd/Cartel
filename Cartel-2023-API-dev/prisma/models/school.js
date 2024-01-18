const prisma = require("../prismaClient")
const school = prisma["school"]

async function create(name, teams) {
    return await school.create({
        data: {
            name: name,
            teams: {
                create: teams
            }
        }
    })
}

async function update(id, name)  {
    return await school.update({
        where: {
            id: parseInt(id)
        },
        data: {
            name: name,
            lastUpdate: new Date()
        }
    })
}

async function remove(id) {
    return await school.delete({
        where: {
            id: parseInt(id)
        }
    })
}
async function findAll() {
    return await school.findMany()
}

async function findById(id) {
    return await school.findUnique({
        where: {
            id: parseInt(id)
        }
    })
}

async function findLastUpdate() {
    let s = await school.findFirst({
        orderBy: {
            lastUpdate: "desc"
        },
        select: {
            lastUpdate: true
        }
    });
    return s.lastUpdate;
}

module.exports = {
    create: create,
    findAll: findAll,
    findById: findById,
    findLastUpdate: findLastUpdate,
    update: update,
    remove: remove
}
const prisma = require("../prismaClient")
const logs = prisma["logs"]

async function create(user, action, url, data) {
    return await logs.create({
        data: {
            date: new Date(),
            user: user,
            action: action,
            url: url,
            data: data
        }
    })
}

async function findAll() {
    return await logs.findMany({
        orderBy: {
            date: "desc"
        }
    });
}

module.exports = {
    create: create,
    findAll: findAll
}
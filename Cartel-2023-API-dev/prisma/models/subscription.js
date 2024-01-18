const prisma = require("../prismaClient")
const subscription = prisma["subscription"]


async function create(sub) {
    return await subscription.create({
        data: {
            endpoint: sub.endpoint,
            keys: JSON.stringify(sub.keys)
        }
    });
}

async function getAll() {
    return await subscription.findMany()
}

async function remove(id) {
    return await subscription.delete({
        where: {
            id: id
        }
    });
}

async function removeByEndpoint(endpoint) {
    let sub = await subscription.findFirst({
        where: {
            endpoint: endpoint
        }
    });
    if (sub) {
        return await remove(sub.id);
    }
    return null;
}

async function remove_all(){
    return await subscription.deleteMany();
}

module.exports = {
    create: create,
    getAll: getAll,
    remove: remove,
    removeByEndpoint: removeByEndpoint,
    remove_all: remove_all
}



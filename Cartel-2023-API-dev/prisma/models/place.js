const prisma = require("../prismaClient")
const place = prisma["place"]

async function create(name, address, latitude, longitude, isHotel) {
    return await place.create({
        data: {
            name: name,
            address: address,
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
            isHotel: isHotel,
        }
    })
}

async function update(id, name, address, latitude, longitude, isHotel)  {
    return await place.update({
        where: {
            id: parseInt(id)
        },
        data: {
            name: name,
            address: address,
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
            isHotel: isHotel,
            lastUpdate: new Date()
        }
    })
}

async function remove(id) {
    return await place.delete({
        where: {
            id: parseInt(id)
        }
    })
}
async function findAll(isHotel) {
    if (isHotel !== undefined){
        return await place.findMany({
            where: {
                isHotel: isHotel
            }
        })
    }
    return await place.findMany()
}

async function findById(id) {
    return await place.findUnique({
        where: {
            id: parseInt(id)
        }
    })
}

async function findLastUpdate() {
    let p = await place.findFirst({
        orderBy: {
            lastUpdate: "desc"
        },
        select: {
            lastUpdate: true
        }
    });
    return p.lastUpdate;
}

module.exports = {
    create: create,
    findAll: findAll,
    findById: findById,
    findLastUpdate: findLastUpdate,
    update: update,
    remove: remove
}
const event = require('../../prisma/models/event');
const prisma = require("../../prisma/prismaClient");

var placeId1, placeId2;

beforeAll(async () => {
    let result = await prisma.place.create({
        data: {
            name: "volutpat eleifend donec",
            address: '123 rue de la paix',
            latitude: 10,
            longitude: 83,
            isHotel: true
        }
    });
    placeId1 = result.id;

    result = await prisma.place.create({
        data: {
            name: "ligula in lacus curabitur",
            address: '234 rue de la paix',
            latitude: 80,
            longitude: 86,
            isHotel: false
        }
    });
    placeId2 = result.id;
});

describe("Event Creation/Update/Deletion Test - Unit", () => {
    var eventId;
    it("should create an event", async () => {
        let result = await event.create("Match de Rugby", "Rugby", placeId1, "2022-06-21T03:09:00+00:00");
        eventId = result.id;
        let eventTest = await event.findById(eventId),
            allEvents = await event.findAll();
        expect(allEvents.length).toBe(1);
        expect(eventTest.id).toBe(eventId);
        expect(eventTest.name).toBe("Match de Rugby");
        expect(eventTest.sport).toBe("Rugby");
        expect(eventTest.placeId).toBe(placeId1);
        // prisma return dates with yyyy-mm-ddThh:mm:ss+00:000Z format
        expect(eventTest.date.toString()).toBe(new Date("2022-06-21T03:09:00.000Z").toString());
    });

    it("should update an event", async () => {
        await event.update(eventId, "Match de Football", "Football", placeId2, "2022-06-21T03:12:00+00:00");
        let eventTest = await event.findById(eventId);
        expect(eventTest.id).toBe(eventId);
        expect(eventTest.name).toBe("Match de Football");
        expect(eventTest.sport).toBe("Football");
        expect(eventTest.placeId).toBe(placeId2);
        // prisma return dates with yyyy-mm-ddThh:mm:ss+00:000Z format
        expect(eventTest.date.toString()).toBe(new Date("2022-06-21T03:12:00.000Z").toString());
    });

    it("should delete an event", async () => {
        await event.remove(eventId);
        expect(await event.findById(eventId)).toBeNull();
    });
});

afterAll(async () => {
    await prisma.place.delete({
        where: {
            id: placeId1
        }
    });
    await prisma.place.delete({
        where: {
            id: placeId2
        }
    });
});
const score = require('../../prisma/models/score');
const prisma = require("../../prisma/prismaClient");

var placeId1, placeId2, eventId1, eventId2, schoolId1, schoolId2, teamId1, teamId2;

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

    result = await prisma.event.create({
        data: {
            name: "Match de Rugby",
            sport: "Rugby",
            placeId: placeId1,
            date: "2022-06-21T03:09:00+00:00"
        }
    });
    eventId1 = result.id;

    result = await prisma.event.create({
        data: {
            name: "Match de Football",
            sport: "Football",
            placeId: placeId2,
            date: "2022-06-23T03:09:00+00:00"
        }
    });
    eventId2 = result.id;

    result = await prisma.school.create({
        data: {
            name: "ante"
        }
    });
    schoolId1 = result.id;

    result = await prisma.school.create({
        data: {
            name: "porttitor pede"
        }
    });
    schoolId2 = result.id;

    result = await prisma.team.create({
        data: {
            name: "team1",
            schoolId: schoolId1,
            sport: "Rugby"
        }
    });
    teamId1 = result.id;

    result = await prisma.team.create({
        data: {
            name: "team2",
            schoolId: schoolId2,
            sport: "Football"
        }
    });
    teamId2 = result.id;
});

describe("Score Creation/Update/Deletion Test - Unit", () => {
    var scoreId;
    it("should create a score", async () => {
        let result = await score.create(eventId1, teamId1);
        scoreId = result.id;
        let scoreTest = await score.findById(scoreId),
            allScores = await score.findAll();
        expect(allScores.length).toBe(1);
        expect(scoreTest.value).toBe(0);
        expect(scoreTest.eventId).toBe(eventId1);
        expect(scoreTest.teamId).toBe(teamId1);
    });

    it("should update a score", async () => {
        await score.update(scoreId, eventId2, teamId2, 8);
        let scoreTest = await score.findById(scoreId);
        expect(scoreTest.value).toBe(8);
        expect(scoreTest.eventId).toBe(eventId2);
        expect(scoreTest.teamId).toBe(teamId2);
    });

    it("should delete a score", async () => {
        await score.remove(scoreId);
        expect(await score.findById(scoreId)).toBeNull();
    });
});

afterAll(async () => {
    await prisma.event.delete({
        where: {
            id: eventId1
        }
    });
    await prisma.event.delete({
        where: {
            id: eventId2
        }
    });
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

    await prisma.team.delete({
        where: {
            id: teamId1
        }
    });

    await prisma.team.delete({
        where: {
            id: teamId2
        }
    });

    await prisma.school.delete({
        where: {
            id: schoolId1
        }
    });
    await prisma.school.delete({
        where: {
            id: schoolId2
        }
    });
});
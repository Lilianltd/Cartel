const place = require('../../prisma/models/place');

describe("Place Creation/Update/Deletion Test - Unit", () => {
    var placeId;
    it("should create a place", async () => {
        let result = await place.create("Test Place", "123 rue de la paix", 0, 0, true);
        placeId = result.id;
        let placeTest = await place.findById(placeId),
            allPlaces = await place.findAll();
        expect(allPlaces.length).toBe(1);
        expect(placeTest.name).toBe("Test Place");
        expect(placeTest.latitude).toBe(0);
        expect(placeTest.longitude).toBe(0);
        expect(placeTest.isHotel).toBe(true);
    });

    it("should update a place", async () => {
        await place.update(placeId, "Updated Test Place", "Address updated", 1, 1, false);
        let placeTest = await place.findById(placeId);
        expect(placeTest.name).toBe("Updated Test Place");
        expect(placeTest.address).toBe("Address updated");
        expect(placeTest.latitude).toBe(1);
        expect(placeTest.longitude).toBe(1);
        expect(placeTest.isHotel).toBe(false);
    });

    it("should delete a place", async () => {
        await place.remove(placeId);
        expect(await place.findById(placeId)).toBeNull();
    });

});

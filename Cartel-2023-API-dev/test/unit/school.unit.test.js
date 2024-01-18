const school = require('../../prisma/models/school');

describe("School Creation/Update/Deletion Test - Unit", () => {
    var schoolId;
    it("should create a school", async () => {
        let result = await school.create("Test School");
        schoolId = result.id;
        let schoolTest = await school.findById(schoolId),
            allSchools = await school.findAll();
        expect(allSchools.length).toBe(1);
        expect(schoolTest.name).toBe("Test School");
    });
    it("should update a school", async () => {
        await school.update(schoolId, "Updated Test School");
        let schoolTest = await school.findById(schoolId);
        expect(schoolTest.name).toBe("Updated Test School");
    });
    it("should delete a school", async () => {
        await school.remove(schoolId);
        expect(await school.findById(schoolId)).toBeNull();
    });
});
const StudentsController = require("../../../lib/controllers/StudentsController");

describe("Tests in StudentsController", () => {
    test("1. getStudents", () => {
        const studentsJson = StudentsController.getStudents();
        const studentsJsonName = studentsJson.map(student => student.name);

        expect(studentsJsonName).toBe("Kara");

    });
});
const StudentsController = require("../../../lib/controllers/StudentsController");

describe("Tests in StudentsController", () => {
    test("1. getStudents", () => {
        const studentsJson = StudentsController.getStudents();
        expect(studentsJson).not.toBeUndefined();
    });
});
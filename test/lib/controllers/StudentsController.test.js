const StudentsController = require("../../../lib/controllers/StudentsController");

describe("Tests in StudentsController", () => {
    test("1. getStudents", () => {
        const studentsJson = StudentsController.getStudents();
        expect(studentsJson).not.toBeUndefined();
    });
    test("2. getStudentsEmails", () => {
        const studentsEmailsJson = StudentsController.getStudentsEmails();
        expect(studentsEmailsJson).not.toBeUndefined();
    });
});
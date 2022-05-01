const StudentService = require("../services/StudentService");
const Reader = require("../utils/Reader");

class StudentsController {
    static getStudents() {
        return Reader.readJsonFile("students.json");
    }
}

module.exports = StudentsController;

class StudentService {
    static filterStudentsWithCertificationEmail(students) {
        const studentsCertification = students.filter(student => student.haveCertification === true);
        const studentsEmails = studentsCertification.map(student => (student.email));

        return studentsEmails;
    }
}

module.exports = StudentService;

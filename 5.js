var student = {
    firstName: "Alice",
    lastName: "Phoenix",
    grade: 1,
};
function studentsData(student) {
    var firstName = student.firstName, lastName = student.lastName, grade = student.grade;
    console.log("Student: ".concat(firstName, " ").concat(lastName, ", grade ").concat(grade));
}
studentsData(student);

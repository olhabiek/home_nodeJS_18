var employees = [
    { name: "Alice", salary: 5000 },
    { name: "Bob", salary: 6000 },
    { name: "Charlie", salary: 7000 },
];
function getSalaries(employees) {
    return employees.map(function (employee) { return employee.salary; });
}
var salaries = getSalaries(employees);
console.log(salaries);

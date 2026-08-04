// Given an array of employee records, each with a `department` and an
// `hoursWorked` field, return the total hours worked by employees in the
// "engineering" department.
// - Empty array in -> 0.
// - If no employees are in engineering -> 0.
// - Employees in other departments must not be counted.
function sumEngineeringHours(employees) {

  return employees.filter((employee) => employee.department === 'engineering').reduce((hoursWorked, currentValue) => hoursWorked + currentValue.hoursWorked, 0)

}

module.exports = { sumEngineeringHours };

console.log(
  sumEngineeringHours([
    { department: "engineering", hoursWorked: 10 },
    { department: "sales", hoursWorked: 5 },
    { department: "engineering", hoursWorked: 6 },
  ]),
); // 16

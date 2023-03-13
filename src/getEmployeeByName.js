const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};
  return data.employees.find((employee) =>
    Object.values(employee).some((value) => value === employeeName));
};

module.exports = getEmployeeByName;

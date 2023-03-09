const data = require('../data/zoo_data');

const isManager = (id) =>
  data.employees.some((employee) => employee.managers.some((managerId) => managerId === id));

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees
    .filter((employee) => employee.managers
      .some((manager) => manager === managerId))
    .map((element) => `${element.firstName} ${element.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };

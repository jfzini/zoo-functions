const data = require('../data/zoo_data');

const isManager = (id) =>
  data.employees.some(({ managers }) => managers.some((managerId) => managerId === id));

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees
    .filter(({ managers }) => managers.some((manager) => manager === managerId))
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
};

module.exports = { isManager, getRelatedEmployees };

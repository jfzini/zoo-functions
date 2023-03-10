const data = require('../data/zoo_data');

const findEmployee = (name, parmID) => {
    const employeeByName = data.employees.find((employee) => Object.values(employee).includes(name));
    const employeeByID = data.employees.find((employee) => Object.values(employee).includes(parmID));
  
  return employeeByName || employeeByID;
}

const getEmployeesCoverage = (objParam) => {
  const { name, id: parmID } = objParam;
  try {
    const foundEmployee = findEmployee(name, parmID);
    const { id, firstName, lastName, responsibleFor } = foundEmployee;
    return {
      id,
      fullName: `${firstName} ${lastName}`,
      species: responsibleFor.map((element) => data.species.find(({ id }) => id === element).name),
      locations: responsibleFor.map((element) => data.species.find(({ id }) => id === element).location)
    }
  }
  catch {
    throw new Error('Informações inválidas');
  }
  
};

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;

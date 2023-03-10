const data = require('../data/zoo_data');

const findEmployee = (name, parmID) => {
    const employeeByName = data.employees.find((employee) => Object.values(employee).includes(name));
    const employeeByID = data.employees.find((employee) => Object.values(employee).includes(parmID));
  
  return employeeByName || employeeByID;
};

const getAllEmployess = () => {
  return data.employees.map(({ id, firstName, lastName, responsibleFor }) => ({
    id,
    fullName: `${firstName} ${lastName}`,
    species: responsibleFor.map((element) => data.species.find(({ id }) => id === element).name),
    locations: responsibleFor.map((element) => data.species.find(({ id }) => id === element).location)
  }));
}

const getEmployeesCoverage = (objParam) => {
  if (!objParam){
    return getAllEmployess();
  }

  try {
    const { name, id: parmID } = objParam;
    const foundEmployee = findEmployee(name, parmID);
    const { id, firstName, lastName, responsibleFor } = foundEmployee;
    return {
      id,
      fullName: `${firstName} ${lastName}`,
      species: responsibleFor.map((element) => data.species.find(({ id }) => id === element).name),
      locations: responsibleFor.map((element) => data.species.find(({ id }) => id === element).location)
    }
  }
  catch { throw new Error('Informações inválidas') }
};

module.exports = getEmployeesCoverage;

const data = require('../data/zoo_data');

const getAllEmployess = () => data.employees.map(({ id, firstName, lastName, responsibleFor }) => ({
  id,
  fullName: `${firstName} ${lastName}`,
  species: responsibleFor
    .map((element) => data.species.find((animal) => animal.id === element).name),
  locations: responsibleFor
    .map((element) => data.species.find((animal) => animal.id === element).location),
}));

const getEmployeesCoverage = (objParam) => {
  if (!objParam) return getAllEmployess();
  const specificEmployee = getAllEmployess()
    .find(({ fullName, id }) => fullName.includes(objParam.name) || id === objParam.id);
  if (!specificEmployee) throw new Error('Informações inválidas');
  return specificEmployee;
};

module.exports = getEmployeesCoverage;

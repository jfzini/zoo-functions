const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (employeeID) => {
  const firstAnimalID = data.employees.find(({ id }) => id === employeeID).responsibleFor[0];
  const oldestAnimal = data.species.find(({ id }) => id === firstAnimalID).residents
    .sort((a, b) => b.age - a.age)[0];
  const { name, sex, age } = oldestAnimal;
  return [name, sex, age];
};

module.exports = getOldestFromFirstSpecies;

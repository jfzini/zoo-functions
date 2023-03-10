const data = require('../data/zoo_data');

const getNamesArray = (speciesLocated) => {
  const teste = data.species.find((animal) => animal.name === speciesLocated).residents.map(({ name }) => name);
  return teste;
}

const getNamesBySex = (speciesLocated, speciesSex) => {
  const namesBySex = data.species.find((animal) => animal.name === speciesLocated).residents.filter(({ sex }) => sex === speciesSex).map(({ name }) => name);
  return namesBySex;
}

const getAnimalMap = (options) => data.species.reduce((acc, { location }) => {
  const speciesLocation = data.species
    .filter((animalSpecies) => animalSpecies.location === location)
    .map((element) => element.name);
  if (!options || !options.includeNames) {
    acc[location] = speciesLocation;
    return acc;
  }

  acc[location] = speciesLocation
    .map((speciesLocated) => ({ [speciesLocated]: getNamesArray(speciesLocated) }));

  // if (options && options.sorted) {
  //   acc[location] = speciesLocation
  //     .map((speciesLocated) => ({ [speciesLocated]: data.species.find((animal) => animal.name === speciesLocated).residents.map(({ name }) => name).sort() }));
  // }

  if (options && options.sex) {
    acc[location] = speciesLocation
      .map((speciesLocated) => ({ [speciesLocated]: getNamesBySex(speciesLocated, options.sex) }));
  }

  // if (options && options.sorted && options.sex) {
  //   acc[location] = speciesLocation
  //     .map((speciesLocated) => ({ [speciesLocated]: data.species.find((animal) => animal.name === speciesLocated).residents.filter(({ sex }) => sex === options.sex).map(({ name }) => name).sort() }));
  // }

  return acc;
}, {});

console.log((getAnimalMap({includeNames: true, sex: 'male'})));

module.exports = getAnimalMap;

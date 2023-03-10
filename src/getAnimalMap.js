const data = require('../data/zoo_data');

const getNamesArray = (speciesLocated, sorted) => {
  let teste = data.species.find((animal) => animal.name === speciesLocated).residents.map(({ name }) => name);
  if (sorted) {
    teste = data.species.find((animal) => animal.name === speciesLocated).residents.map(({ name }) => name).sort();
  }
  return teste;
};

const getNamesBySex = (speciesLocated, speciesSex, sorted) => {
  let namesBySex = data.species.find((animal) => animal.name === speciesLocated).residents.filter(({ sex }) => sex === speciesSex).map(({ name }) => name);
  if (sorted) {
    namesBySex = data.species.find((animal) => animal.name === speciesLocated).residents.filter(({ sex }) => sex === speciesSex).map(({ name }) => name).sort();
  }
  return namesBySex;
};

const getAnimalMap = (options) => data.species.reduce((acc, { location }) => {
  const speciesLocation = data.species
    .filter((animalSpecies) => animalSpecies.location === location)
    .map((element) => element.name);
  if (!options || !options.includeNames) {
    acc[location] = speciesLocation;
    return acc;
  }

  acc[location] = speciesLocation
    .map((speciesLocated) => ({ [speciesLocated]: getNamesArray(speciesLocated, options.sorted || false) }));

  // if (options && options.sorted) {
  //   acc[location] = speciesLocation
  //     .map((speciesLocated) => ({ [speciesLocated]: data.species.find((animal) => animal.name === speciesLocated).residents.map(({ name }) => name).sort() }));
  // }

  if (options && options.sex) {
    acc[location] = speciesLocation
      .map((speciesLocated) => ({ [speciesLocated]: getNamesBySex(speciesLocated, options.sex, options.sorted || false) }));
  }
  // if (options && options.sorted && options.sex) {
  //   acc[location] = speciesLocation
  //     .map((speciesLocated) => ({ [speciesLocated]: data.species.find((animal) => animal.name === speciesLocated).residents.filter(({ sex }) => sex === options.sex).map(({ name }) => name).sort() }));
  // }

  return acc;
}, {});

console.log((getAnimalMap({ includeNames: true, sex: 'male' })));

module.exports = getAnimalMap;

const teste = (options) => data.species.reduce((acc, { location }) => {
  acc[location] = speciesLocation
    .map((speciesLocated) => ({ [speciesLocated]: data.species.reduce((a, b) => {

    }, []) }));
}, {});

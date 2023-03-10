const data = require('../data/zoo_data');

const getNamesArray = (speciesLocated, sorted) => {
  let teste = data.species
    .find((animal) => animal.name === speciesLocated).residents
    .map(({ name }) => name);
  if (sorted) {
    teste = data.species
      .find((animal) => animal.name === speciesLocated).residents
      .map(({ name }) => name).sort();
  }
  return teste;
};

const getNamesBySex = (speciesLocated, speciesSex, sorted) => {
  let namesBySex = data.species
    .find((animal) => animal.name === speciesLocated).residents
    .filter(({ sex }) => sex === speciesSex)
    .map(({ name }) => name);
  if (sorted) {
    namesBySex = data.species
      .find((animal) => animal.name === speciesLocated).residents
      .filter(({ sex }) => sex === speciesSex)
      .map(({ name }) => name).sort();
  }
  return namesBySex;
};

const withoutNames = () => data.species.reduce((acc, { location }) => {
  const speciesLocation = data.species
    .filter((animalSpecies) => animalSpecies.location === location)
    .map((element) => element.name);
  acc[location] = speciesLocation;
  return acc;
}, {});

const withNames = (options) => data.species.reduce((acc, { location }) => {
  const speciesLocation = data.species
    .filter((animalSpecies) => animalSpecies.location === location)
    .map((element) => element.name);

  acc[location] = speciesLocation
    .map((speciesLocated) => ({ [speciesLocated]:
        getNamesArray(speciesLocated, options.sorted || false) }));

  if (options && options.sex) {
    acc[location] = speciesLocation
      .map((speciesLocated) => ({ [speciesLocated]:
          getNamesBySex(speciesLocated, options.sex, options.sorted || false) }));
  }
  return acc;
}, {});

const getAnimalMap = (options) => {
  if (!options || !options.includeNames) {
    return withoutNames();
  }
  return withNames(options);
};

module.exports = getAnimalMap;

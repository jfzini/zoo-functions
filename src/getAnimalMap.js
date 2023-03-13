const data = require('../data/zoo_data');

// const getNamesArray = (speciesLocated, sorted) => {
//   let teste = data.species
//     .find((animal) => animal.name === speciesLocated).residents
//     .map(({ name }) => name);
//   if (sorted) {
//     teste = data.species
//       .find((animal) => animal.name === speciesLocated).residents
//       .map(({ name }) => name).sort();
//   }
//   return teste;
// };

// const getNamesBySex = (speciesLocated, speciesSex, sorted) => {
//   let namesBySex = data.species
//     .find((animal) => animal.name === speciesLocated).residents
//     .filter(({ sex }) => sex === speciesSex)
//     .map(({ name }) => name);
//   if (sorted) {
//     namesBySex = data.species
//       .find((animal) => animal.name === speciesLocated).residents
//       .filter(({ sex }) => sex === speciesSex)
//       .map(({ name }) => name).sort();
//   }
//   return namesBySex;
// };

// const withoutNames = () => data.species.reduce((acc, { location }) => {
//   const speciesLocation = data.species
//     .filter((animalSpecies) => animalSpecies.location === location)
//     .map((element) => element.name);
//   acc[location] = speciesLocation;
//   return acc;
// }, {});

// const withNames = (options) => data.species.reduce((acc, { location }) => {
//   const speciesLocation = data.species
//     .filter((animalSpecies) => animalSpecies.location === location)
//     .map((element) => element.name);

//   acc[location] = speciesLocation
//     .map((speciesLocated) => ({ [speciesLocated]:
//         getNamesArray(speciesLocated, options.sorted || false) }));

//   if (options && options.sex) {
//     acc[location] = speciesLocation
//       .map((speciesLocated) => ({ [speciesLocated]:
//           getNamesBySex(speciesLocated, options.sex, options.sorted || false) }));
//   }
//   return acc;
// }, {});

// const getAnimalMap = (options) => {
//   if (!options || !options.includeNames) {
//     return withoutNames();
//   }
//   return withNames(options);
// };

const generateAnimalObj = (paramName, { sex = false, sorted = false }) => {
  const animalObj = {};
  let animalNames = data.species.find(({ name: curName }) => paramName === curName).residents
    .map(({ name }) => name);
  if (sex) {
    animalNames = data.species.find(({ name: curName }) => paramName === curName).residents
      .filter(({ sex: curSex }) => sex === curSex)
      .map(({ name }) => name);
  }
  if (sorted) animalObj[paramName] = animalNames.sort();
  else animalObj[paramName] = animalNames;
  return animalObj;
};

const getAnimalMap = (options) =>
  data.species.reduce((acc, { name, location }) => {
    if (!options || !options.includeNames) acc[location].push(name);
    else acc[location].push(generateAnimalObj(name, options));
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });

module.exports = getAnimalMap;

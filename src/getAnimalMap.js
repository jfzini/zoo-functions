const data = require('../data/zoo_data');

const getAnimalMap = (options) => {
  return data.species.reduce((acc, { location }) => {
    if (!options || !options.includeNames) {
      const speciesLocation = data.species.filter((animalSpecies) => animalSpecies.location === location).map((element) => element.name)
      acc[location] = speciesLocation;
      return acc;
    }
    const residentsObjArr = speciesLocation.map((speciesLocated) => ({speciesLocated: data.species.find((animal) => animal.name === speciesLocated).residents}));
    if (options && options.sex) {
      acc[location]
    }
  }, {})
    // const animalNamesArr =
    // acc[location] = animalSpeciesArr;
    // if (includeNames) {
    //   acc[location] = animalSpeciesArr.map((animalLoc) => ({[animalLoc]: data.species.find((animal) => animal.name === animalLoc).residents.map((element) => element.name)}));
    // }
    // if (sexParam) {
    //   acc[location] = animalSpeciesArr.map((animalLoc) => ({[animalLoc]: data.species.find((animal) => animal.name === animalLoc).residents.filter((resident) => resident.sex === sexParam).map((element) => element.name)}));
    // }
    // if (sorted) {
    //   // acc[location].map((element) => Object.values(element).sort());
    //   acc[location] = animalSpeciesArr.map((animalLoc) => ({[animalLoc]: data.species.find((animal) => animal.name === animalLoc).residents.map((element) => element.name).sort()}));
    // }
  //   return acc;
  // }, {});

  // if (animal && animal.species) {
  //   return Object.entries(animalsListObject)
  //     .find((speciesArr) => speciesArr[0] === animal.species)[1];
  // }

  return animalsListObject;
}

console.log(getAnimalMap({teste: 3, includeNames: false}));

module.exports = getAnimalMap;

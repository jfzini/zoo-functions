const data = require('../data/zoo_data');

const generateAnimalObj = (paramName, { sex, sorted }) => {
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

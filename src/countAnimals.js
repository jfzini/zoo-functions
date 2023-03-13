const data = require('../data/zoo_data');

const countAnimals = ({ sex, species } = {}) => {
  const animalsListObject = data.species.reduce((acc, { name, residents }) => {
    acc[name] = residents.length;
    if (sex) {
      acc[name] = residents.filter(({ sex: residentSex }) => residentSex === sex).length;
    }
    return acc;
  }, {});
  if (species) {
    return Object.entries(animalsListObject)
      .find((speciesArr) => speciesArr[0] === species)[1];
  }
  return animalsListObject;
};

module.exports = countAnimals;

const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const animalsListObject = data.species.reduce((acc, { name, residents }) => {
    acc[name] = residents.length;
    if (animal && animal.sex) {
      acc[name] = residents
        .filter((resident) => resident.sex === animal.sex).length;
    }
    return acc;
  }, {});

  if (animal && animal.species) {
    return Object.entries(animalsListObject)
      .find((speciesArr) => speciesArr[0] === animal.species)[1];
  }

  return animalsListObject;
};

module.exports = countAnimals;

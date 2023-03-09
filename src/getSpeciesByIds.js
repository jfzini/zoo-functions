const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) =>
  ids.map((idElement) => data.species.find((specie) => specie.id === idElement));

module.exports = getSpeciesByIds;

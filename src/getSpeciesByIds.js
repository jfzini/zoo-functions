const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => ids.map((curId) => data.species.find(({ id }) => id === curId));

module.exports = getSpeciesByIds;

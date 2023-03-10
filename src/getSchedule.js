const data = require('../data/zoo_data');

const validateTarget = (target) => {
  const animalsArray = data.species.map(({name}) => name);
  const daysSet = //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set set retira itens repetidos;
    new Set(data.species.map(({ availability }) => availability)
      .reduce((a, b) => a.concat(b)));
  if (!target || !animalsArray.includes(target) || !daysSet.has(target)) {
    return false;
  }
  return true;
}

const getSchedule = (scheduleTarget) => {
  if (!scheduleTarget) {
    
  }
  return data.species.find(({ name }) => name === scheduleTarget).availability;
};

console.log(getSchedule('tigers'));

module.exports = getSchedule;

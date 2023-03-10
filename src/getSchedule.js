const data = require('../data/zoo_data');
const daysList = 
  Object.keys(new Set(data.species.map(({ availability }) => availability)
    .reduce((a, b) => a.concat(b))));
console.log(daysList);
const validateTarget = (scheduleTarget) => {
  const animalsArray = data.species.map(({name}) => name);
  const daysSet = 
  new Set(data.species.map(({ availability }) => availability)
    .reduce((a, b) => a.concat(b)));
  console.log(animalsList);
  if (!scheduleTarget || ) {
    
  }
}

const getSchedule = (scheduleTarget) => {
  if (!scheduleTarget) {
    
  }
  return data.species.find(({ name }) => name === scheduleTarget).availability;
};

console.log(getSchedule('tigers'));

module.exports = getSchedule;

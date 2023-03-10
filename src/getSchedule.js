const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// const validateTarget = (target) => {

//   console.log(daysList);
//   if (!target || !animalsArray.includes(target) || !daysList.includes(target)) {
//     return false;
//   }
//   return true;
// }

const getSchedule = (scheduleTarget) => {
  const animalsArray = species.map(({name}) => name);
  const daysList = Object.keys(data.hours);

  if (!scheduleTarget
    || !animalsArray.includes(scheduleTarget)) {
      return daysList.reduce((acc, curr) => {
        acc[curr] = {
          officeHour: `Open from ${data.hours[curr].open}am until ${data.hours[curr].close}pm`,
          exhibition: species.filter(({ availability }) => availability.includes(curr)).map(({ name }) => name)
        }
        if (data.hours[curr].open === 0) {
          acc[curr] = {
            officeHour: 'CLOSED',
            exhibition: 'The zoo will be closed'
          }
        }
        return acc;
      }, {})
  }
  return species.find(({ name }) => name === scheduleTarget).availability;
};

console.log(getSchedule());

module.exports = getSchedule;

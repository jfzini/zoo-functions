const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const generateObject = (daysList, scheduleTarget) => {
  const schedule = daysList.reduce((acc, curr) => {
    acc[curr] = {
      officeHour: `Open from ${data.hours[curr].open}am until ${data.hours[curr].close}pm`,
      exhibition: species.filter(({ availability }) => availability.includes(curr))
        .map(({ name }) => name),
    };
    if (curr === 'Monday') {
      acc[curr] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    }
    return acc;
  }, {});

  if (daysList.includes(scheduleTarget)) {
    return { [scheduleTarget]: schedule[scheduleTarget] };
  }
  return schedule;
};

const getSchedule = (scheduleTarget) => {
  const animalValidation = species.some(({ name }) => name === scheduleTarget);
  const daysList = Object.keys(data.hours);
  if (!scheduleTarget || !animalValidation) {
    return generateObject(daysList, scheduleTarget);
  }
  return species.find(({ name }) => name === scheduleTarget).availability;
};

module.exports = getSchedule;

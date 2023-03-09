const data = require('../data/zoo_data');

const countEntrants = (entrants = []) =>
  entrants.reduce((acc, { age }) => {
    if (age < 18) {
      acc.child += 1;
    }
    if (age >= 18 && age < 50) {
      acc.adult += 1;
    }
    if (age >= 50) {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });

const calculateEntry = (entrants) => {
  const prices = Object.values(data.prices);
  const orderedPrices = [prices[2], prices[0], prices[1]];
  return Object.values(countEntrants(entrants)).reduce((acc, curr, curIndex) =>
    acc + curr * orderedPrices[curIndex], 0);
};

module.exports = { calculateEntry, countEntrants };

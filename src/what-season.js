const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  try {
    const arr = Object.entries(date);
    if (arr.length) {
      throw new Error("Invalid date!");
    }
    const month = date.getMonth();
    if (month >= 2 && month <= 4) {
      console.log(month);
      return 'spring';
    }
    if (month >= 5 && month <= 7) {
      console.log(month);
      return 'summer';
    }
    if (month >= 8 && month <= 10) {
      console.log(month);
      return 'autumn';
    }
    if (month === 0 || month === 1 || month === 11) {
      console.log(month);
      return 'winter';
    }
  } catch (error) {
    throw new Error("Invalid date!");
  }
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};

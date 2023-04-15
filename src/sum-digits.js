const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let number = 0;
  const func = (num) => {
    number = 0;
    const arr = String(num).split('');
    arr.forEach((el) => {
      number += Number(el);
    });
    if(String(number).length > 1) {
      func(number);
    }
  }
  
  func(n);
  return number;
}

module.exports = {
  getSumOfDigits
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let currentLetter = '';
  let newString = '';

  const arrOfLetters = str.split('');

  arrOfLetters.forEach((letter, index) => {
    currentLetter = letter;
    if (arrOfLetters[index + 1] === currentLetter) {
      count += 1;
    } else {
      if (count > 1) newString += count + currentLetter
      else newString += currentLetter
      count = 1;
      currentLetter = '';
    }
  });

  return newString;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};

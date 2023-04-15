const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const endArr = [];
  let index = 0;
  const newArr = arr.filter((el) => el !== -1).sort((a, b) => a - b);
  arr.forEach((el) => {
    if (el === -1) {
      endArr.push(el);
    } else {
      endArr.push(newArr[index]);
      index += 1;
    }
  });
  return endArr;
}

module.exports = {
  sortByHeight
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  matrix.forEach((outerEl, outerIndex) => {
    outerEl.forEach((innerEl, innerIndex) => {
      if (outerIndex === 0 && innerEl !== 0) {
        sum += innerEl;
      }
      if (outerIndex !== 0 && innerEl !== 0 && matrix[outerIndex - 1][innerIndex] !== 0) {
        sum += innerEl;
      }
    });
  });
  
  return sum;
}

module.exports = {
  getMatrixElementsSum
};

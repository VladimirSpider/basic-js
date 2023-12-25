const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let startArea = matrix.map((innerArr) => innerArr.map((el) => el = 0));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        for (let newI = -1; newI <= 1; newI++) {
          for (let newJ = -1; newJ <= 1; newJ++) {
            if ((i + newI >= 0 && i + newI < matrix.length) && (j + newJ >= 0 && j + newJ < matrix[0].length)) {
              if (!(newI === 0 && newJ === 0))
                startArea[i + newI][j + newJ]++;
            }
          }
        }
      }
    }
  }

  return startArea;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  minesweeper
};
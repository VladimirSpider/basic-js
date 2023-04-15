const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
 const arr = String(n).split('');
 let sortArr = arr.slice(0).sort((a, b) => a - b);
 let index = 0;
 
 const ff = () => {
  index = arr.indexOf(sortArr[0], 0);
  console.log(index);
  if (index !== 0 && arr[index] !== '0' && (arr[index - 1] > arr[index]) && (Number(arr[index - 2] + arr[index -1]) < Number(arr[index - 1] + arr[index]))) {
   sortArr = sortArr.slice(1);
   ff();
  }
 }
 
 ff();
 arr.splice(index, 1);
 
 return Number(arr.join(''));
}

module.exports = {
  deleteDigit
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  
  const newArr = arr.slice(0);
  const endArr = [];
  newArr.forEach((el, index) => {
    endArr.push(el);
    if (el === '--discard-prev') {
      if (index !== 0) {
        endArr.splice(index - 1, 1);
      }
    }
    if (el === '--double-prev') {
      if (index !== 0) {
        if (typeof newArr[index - 1] === 'number') {
          endArr.push(newArr[index - 1]);
        }
      }
    }
    if (el === '--double-next') {
      if (index < newArr.length - 1) {
        endArr.push(newArr[index + 1]);
      }
    }
    if (el === '--discard-next') {
      if (index < newArr.length - 1) {
        newArr.splice(index + 1, 1);
      }
    }
  });
  
  return endArr;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};

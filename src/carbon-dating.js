const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity === "string" && Number(sampleActivity) < 0) {
    return false;
  }
  else if (typeof sampleActivity === "string" && Number(sampleActivity)) {
    const A = MODERN_ACTIVITY / sampleActivity;
    const K = 0.693 / HALF_LIFE_PERIOD;
    const T = Math.log(A) / K;
    return Math.ceil(T) > 0 ? Math.ceil(T) : false;
  } else {
    return false;
  }
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};

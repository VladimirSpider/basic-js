const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separator = 'separator' in options ? options['separator'] : '+';
  let additionSeparator  = 'additionSeparator' in options ? options['additionSeparator'] : '|';
  let repeatTimes = 'repeatTimes' in options ? options['repeatTimes'] : 1;
  let additionRepeatTimes  = 'additionRepeatTimes' in options ? options['additionRepeatTimes'] : 1;
  let addition = 'addition' in options ? String(options['addition']) : '';

  const additionFullSeparator = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  const fullNewString = Array(repeatTimes).fill(str + additionFullSeparator).join(separator);

  return fullNewString;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
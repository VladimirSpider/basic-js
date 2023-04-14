const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  if (!members.length) return false;
  const lettersArr = [];
  members.forEach((el) => {
    if (typeof el === 'string') {
      let firstLetter = el.trim().slice(0, 1);
      lettersArr.push(firstLetter.toUpperCase());
    }
  });
  lettersArr.sort();
  return lettersArr.join('');
}

module.exports = {
  createDreamTeam
};

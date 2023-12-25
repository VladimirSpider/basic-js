const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const answer = {};
  domains.forEach((domain) => {
    const piecesOfDomain = domain.split('.').reverse();
    let pieceOfDomain = '';
    for (let i = 0; i < piecesOfDomain.length; i++) {
      console.log(piecesOfDomain);
      pieceOfDomain += '.' + piecesOfDomain[i];
      if (pieceOfDomain in answer)
        answer[pieceOfDomain]++;
      else
        answer[pieceOfDomain] = 1;
    }
  });
  console.log(answer);
  return answer;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
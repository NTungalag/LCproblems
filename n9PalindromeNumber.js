/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  const num = x;
  if (num === x.split().reverse().join()) return true;
  else return false;
};

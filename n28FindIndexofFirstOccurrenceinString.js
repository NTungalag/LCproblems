/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // if (haystack.includes(needle))
  //     return -1;
  // let le = haystack.search(needle);
  let ar = [];

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) ar.push(i);
  }
  for (let i = 0; i < ar.length; i++) {
    if (haystack.substring(ar[i], ar[i] + needle.length) === needle)
      return ar[i];
  }

  return -1;
};

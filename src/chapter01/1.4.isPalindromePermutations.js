/**
 * Go through characters in string and set flag to indicate if there is an
 * odd number of that character. If there is more than one character with an
 * odd number of occurences then it cannot be a palindrome.
 *
 * N = |str|
 * Time: O(N)
 * Addition space: O(N)
 *
 * @param {string[]} str - String to check as a character array
 * @returns {boolean}   True if input string is a permutation of a palindrome (ignoring spaces), otherwise false.
 */
export const isPalindromePermutationsSet = (str) => {
  if (!str) return false;
  const chars = new Set();
  for (let char of str) {
    if (char === ' ') continue;
    if (chars.has(char)) {
      chars.delete(char);
    } else {
      chars.add(char);
    }
  }
  return chars.size <= 1;
};

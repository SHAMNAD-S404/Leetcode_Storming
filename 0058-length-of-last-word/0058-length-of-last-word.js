/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const wordArr = s.trim().split(" ");
    const index = wordArr.length - 1;
    return wordArr[index].length;
};
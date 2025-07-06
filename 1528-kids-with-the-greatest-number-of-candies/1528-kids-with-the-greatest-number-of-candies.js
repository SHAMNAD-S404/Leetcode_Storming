/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

var kidsWithCandies = function(candies, extraCandies) {

const maxCandie = Math.max(...candies);
return candies.map((candie) => (candie+extraCandies) >= maxCandie ? true : false);

};
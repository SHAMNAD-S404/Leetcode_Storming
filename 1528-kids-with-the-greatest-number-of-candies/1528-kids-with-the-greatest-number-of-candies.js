/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

var kidsWithCandies = function(candies, extraCandies) {

// we need a loop 2. var assign i + extra 3 . Math.max(var,...arr) 4. var === max 5. push to arr
const result = [];
for(const num of candies){

    let luckyKid = num + extraCandies;
    let max = Math.max(luckyKid,...candies);
    luckyKid == max ? result.push(true) : result.push(false)

}
return result;


};
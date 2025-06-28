/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {

    const result = [];
    for( const num of nums){
        let count = 0;
        for (const numberr of nums){
            if(num > numberr ) count++
        }
        result.push(count);
    }
    return result;
    
};
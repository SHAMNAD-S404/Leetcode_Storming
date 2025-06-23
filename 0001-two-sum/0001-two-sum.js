/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const diffMap = new Map();

    for (let i=0; i<nums.length; i++){

        let diff = target - nums[i];

        if(diffMap.has(diff) ){
            return [ i,diffMap.get(diff) ]
        }

        diffMap.set(nums[i],i)
    }

    
};
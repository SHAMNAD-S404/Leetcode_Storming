/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let newMap = new Map()

    for(let i=0;i<nums.length;i++){

        let diff = target - nums[i]
        if(newMap.has(diff)){
            return [i,newMap.get(diff)]
        }
        newMap.set(nums[i],i)
    }

    return 'not found'
    
};
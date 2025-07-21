function searchInsert(nums: number[], target: number): number {

    // edge case
    if(nums.length === 0) return 0;
    
    for(let i=0; i<nums.length; i++){
        
        // after find the target return index
        if(nums[i] === target){
            return i;
        }
        // if target is not found and array element is larger than target return the postion
        if(nums[i] > target){
            return i;
        }
    }
    // edge case
    // if target is higher than all the elements in the array then retun the length of the array as index
    return nums.length;
    
};
function getFinalState(nums: number[], k: number, multiplier: number): number[] {


    for(let i=0;i<k;i++){

        let min = Math.min(...nums);
        let index = nums.indexOf(min); //finding the first occurence of min value
        nums[index] = nums[index] * multiplier ;
    }

    return nums;
    
};
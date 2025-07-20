function targetIndices(nums: number[], target: number): number[] {

    const result : number [] = [];
    nums.sort((a,b) => a-b );

    for(let i=0; i<nums.length; i++){
        if(nums[i] === target) result.push(i);
    }

    return result;    
};
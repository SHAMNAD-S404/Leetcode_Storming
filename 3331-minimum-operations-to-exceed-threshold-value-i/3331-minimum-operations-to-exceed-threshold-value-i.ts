function minOperations(nums: number[], k: number): number {

    let operation : number = 0;
    
    for(let i=0;i<nums.length ; i++){
        if( nums[i] < k) operation ++;
    }

    return operation;
    
};
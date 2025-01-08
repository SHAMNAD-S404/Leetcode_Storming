function minOperations(nums: number[], k: number): number {

    let operation : number = 0;
    let collected : Set<number> = new Set();
    const size = nums.length - 1;

    for( let i = size ; i>= 0; i-- ){

        if(nums[i] <= k ){
            collected.add(nums[i])
        }
        operation++;

        if(collected.size === k) break;
    }


    return operation;
};
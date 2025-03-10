function minOperations(nums: number[], k: number): number {

    let operations : number = 0;
    const size = nums.length -1;

    const find  = new Set<number>();

    for(let i = size ; i>= 0; i--){

        if(nums[i] <= k){
            find.add(nums[i])
        }
        operations++;
        if(find.size === k) break;

    }
    return operations;


    
};
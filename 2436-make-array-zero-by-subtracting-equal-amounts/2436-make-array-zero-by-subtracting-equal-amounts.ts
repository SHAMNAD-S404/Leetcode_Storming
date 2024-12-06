function minimumOperations(nums: number[]): number {

    const uniqNums: Set<number> = new Set();

    for(const num of nums){
        if(num > 0){
            uniqNums.add(num)
        }
    }

    return uniqNums.size;    
};
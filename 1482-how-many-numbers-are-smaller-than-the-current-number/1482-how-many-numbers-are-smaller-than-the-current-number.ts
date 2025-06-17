function smallerNumbersThanCurrent(nums: number[]): number[] {
    
    const result : number[] = [];
    const size = nums.length;

    for(let i=0; i<size; i++){

        let count = 0;
        for(let j=0; j<size; j++){
            if( nums[i] > nums[j] ) count++
        }
        result.push(count)
    }
    return result;
};
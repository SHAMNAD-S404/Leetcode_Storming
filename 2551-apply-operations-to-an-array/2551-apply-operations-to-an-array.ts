function applyOperations(nums: number[]): number[] {

    const size = nums.length;
    for(let i=0; i<size ; i++){
        if(nums[i] === nums[i+1] ){
            nums[i] *= 2;
            nums[i+1] = 0;
        }
    }

    const nonZeroValues = nums.filter(num => num !== 0);
    for(let j=nonZeroValues.length ; j<size ; j++){
        nonZeroValues.push(0);
    }

    return nonZeroValues;


};